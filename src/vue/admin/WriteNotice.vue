<template>
    <div>
        <h4>공지사항 작성</h4>
        <b-form id="noticeForm">
            <b-form-group horizontal>
                <template slot="label">
                    <label for="subject">제목 <span class="text-danger">*</span></label>
                </template>
                <b-form-input id="subject" name="subject"
                              v-model="subject"></b-form-input>
            </b-form-group>
            <b-form-group horizontal>
                <template slot="label">
                    <label for="content">내용 <span class="text-danger">*</span></label>
                </template>
                <vue-editor v-model="content"></vue-editor>
            </b-form-group>
            <b-button class="float-right" variant="info" @click="confirm">작성</b-button>
        </b-form>

        <b-modal v-model="confirmModal" no-close-on-esc no-close-on-backdrop>
            <div slot="modal-header">
                공지사항 작성
            </div>
            <p class="my-4">공지사항을 등록하시겠습니까?</p>
            <div slot="modal-footer" class="mt-0 px-2">
                <b-btn variant="info" class="float-right mx-1" @click="submit" :disabled="registering">
                    <span v-if="!registering">등록</span>
                    <ClipLoader v-else :loading="registering" :color="'white'" :size="'18px'"></ClipLoader>
                </b-btn>
                <b-btn variant="default" class="float-right mx-1" @click="confirmModal=false" :disabled="registering">취소</b-btn>
            </div>
        </b-modal>

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
    </div>
</template>

<script>
    /* eslint-disable */
    import { VueEditor } from "vue2-editor";
    import ClipLoader from 'vue-spinner/src/ClipLoader'

    export default {
        name: "WriteNotice",
        created() {
        },
        components: {
          VueEditor,
          ClipLoader
        },
        data() {
            return {
                subject: '',
                content: '',
                errorModal: false,
                errorMessage: '',
                confirmModal: false,
                registering: false
            }
        },
        methods: {
            confirm() {
                if (!this.subject || !this.content) {
                    this.errorModal = true;
                    this.errorMessage = '제목과 내용을 입력해 주세요.';
                } else {
                    this.confirmModal = true;
                }
            },
            submit() {
                this.registering = true;
                const noticeRef = database.ref(`notice/${this.uid}`);
                noticeRef.push({
                    content: this.content,
                    subject: this.subject,
                    createTime: new Date().getTime()
                }, (err) => {
                    this.confirmModal = false;
                    this.registering = false;
                    if (!!err) {
                        this.errorMessage = err;
                        this.errorModal = true;
                    } else {
                        this.$router.push('/customer/notice');
                    }
                });
            }
        },
        computed: {
            uid() {
                return this.$store.state.adminUid;
            }
        }
    }
</script>

<style scoped>

</style>