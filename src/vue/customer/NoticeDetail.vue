<template>
    <div>
        <b-row class="p-3" style="display:block;">
            <b-col class="pt-4">
                <div>
                    <p class="font-weight-bold" style="font-size:22px; margin-bottom: 30px">{{ detail.subject }}
                        <span class="font-weight-light" style="margin-left:10px; font-size:16px;">{{ detail.refinedCreateTime }}</span>
                    </p>
                </div>
                <div id="quill-content" class="ql-editor">
                    <p v-html="detail.content"></p>
                    <!--<vue-editor v-model="detail.content" disabled></vue-editor>-->
                </div>
                <hr>
                <div style="background-color: #eeeeee;">
                    <b-button class="float-right" variant="info" to="/customer/notice" style="color: #FFF;">목록</b-button>
                    <b-button v-if="!!adminUid"
                              class="float-right mr-2"
                              variant="info"
                              @click="deleteNotice(detail.key)"
                              style="color: #FFF;">삭제</b-button>
                </div>

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
    import { VueEditor, Quill } from "vue2-editor";

    export default {
        name: 'NoticeDetail',
        data() {
            return {
                errorMessage: '',
                errorModal: false
            }
        },
        components: {
            VueEditor
        },
        mounted() {
            // var quill = new Quill(document.getElementById('quill-content'), {
            //     theme: 'bubble',
            //     readOnly: true
            // });
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
                const noticeRef = this.$database.ref(refAddr);
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

<style scoped>
    /*@import "~quill/dist/quill.core.css";*/
    /*@import "~quill/dist/quill.bubble.css";*/
</style>