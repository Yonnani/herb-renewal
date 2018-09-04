<template>
    <div>
        <b-row class="p-3">
            <b-col class="pt-4">
                <p class="font-weight-bold">{{ detail.subject }}</p>
                <p class="font-weight-light">{{ detail.refinedCreateTime }}</p>
                <hr>
                <p v-html="detail.content"></p>
                <b-button class="float-right" variant="info" to="/customer/notice" style="color: #FFF;">목록</b-button>
                <b-button v-if="!!adminUid"
                          class="float-right mr-2"
                          variant="info"
                          @click="deleteNotice(detail.key)"
                          style="color: #FFF;">삭제</b-button>

                <b-modal v-model="errorModal"
                         header-bg-variant="danger"
                         header-text-variant="light">
                    <div slot="modal-header">
                        작성 에러
                    </div>
                    <p class="my-4">{{ errorMessage }}</p>
                    <div slot="modal-footer" class="mt-0 px-2">
                        <b-btn variant="default" class="float-right" @click="errorModal=false">닫기</b-btn>
                    </div>
                </b-modal>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: 'NoticeDetail',
        data() {
            return {
                errorMessage: '',
                errorModal: false
            }
        },
        created() {
            console.log('notice detail');
        },
        mounted() {
        },
        computed: {
            detail() {
                return this.$store.state.noticeDetail;
            },
            adminUid() {
                return this.$store.state.adminUid;
            }
        },
        methods: {
            deleteNotice(key) {
                const refAddr = `notice/${process.env.VUE_APP_FIREBASE_UID}/${key}`;
                const noticeRef = database.ref(refAddr);
                noticeRef.remove()
                    .then(result => {
                        if (!result) {
                            this.$router.push('/customer/notice');
                        }
                    })
                    .catch(err => console.log('err', err));
            }
        }
    }
</script>