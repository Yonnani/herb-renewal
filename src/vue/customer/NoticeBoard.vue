<template>
    <div>
        <b-row class="p-3">
            <b-col class="pt-4">
                <div v-if="loading">
                    <ClipLoader :loading="loading" :color="'#212529'"></ClipLoader>
                </div>
                <div v-else>
                    <b-table v-if="items.length > 0"
                             hover
                             :items="items"
                             :fields="fields"
                             :current-page="currentPage"
                             :per-page="perPage">
                        <template slot="subject" slot-scope="data">
                            <a href="#" @click.prevent="showDetail(data.item)">{{ data.item.subject }}</a>
                        </template>
                        <template slot="createTime" slot-scope="data">
                            <!--{{ moment(data.item.createTime).format('YYYY.MM.DD') }}-->
                            {{ data.item.refinedCreateTime }}
                        </template>
                    </b-table>
                    <b-table v-else
                             :items="noitemlist" :fields="noitemFields">
                        <template>

                        </template>
                    </b-table>
                </div>
            </b-col>
        </b-row>
        <b-row class="p-3">
            <b-col class="pt-4">
                <b-pagination :total-rows="totalRows"
                              :per-page="perPage"
                              v-model="currentPage"
                              class="my-0 float-right" />
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import ClipLoader from 'vue-spinner/src/ClipLoader'
    /* eslint-disable */
    export default {
        name: 'NoticeBoard',
        components: {
            ClipLoader
        },
        data() {
            return {
                loading: true,
                items: [],
                fields: [
                    {
                        key: 'subject',
                        label: '제목'
                    },
                    {
                        key: 'createTime',
                        label: '날짜'
                    }
                ],
                noitemlist: [{
                        content: '공지사항이 없습니다.'
                }],
                noitemFields: [{
                        key: 'content', label: '제목'
                }],
                perPage: 10,
                currentPage: 0,
                moment: null
            }
        },
        mounted() {
            this.moment = require('moment');

            const refAddr = `notice/${process.env.VUE_APP_FIREBASE_UID}`;
            const noticeRef = this.$database.ref(refAddr);
            noticeRef.once('value').then(snapshot => {
                const dataObj = snapshot.val();
                this.loading = false;
                if (!!dataObj) {
                    var keyArr = Object.keys(dataObj);
                    this.items = keyArr.map(key => {
                        return {...dataObj[key],
                            key: key,
                            refinedCreateTime: this.moment(dataObj[key].createTime).format('YYYY.MM.DD')
                        };
                    }).sort((a, b) => b.createTime - a.createTime);
                }
            });
        },
        computed: {
            totalRows() {
                return this.items.length;
            }
        },
        methods: {
            showDetail(data) {
                this.$store.commit('setNoticeDetail', data);
                this.$router.push('/customer/notice/detail');
            }
        }
    }
</script>

<style>
    .page-item.active .page-link {
        background-color: #eeeeee;
        border-color: #dddddd;
    }
</style>