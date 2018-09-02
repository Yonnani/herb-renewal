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
            <b-button class="float-right" variant="info" @click="submit">작성</b-button>
        </b-form>

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

    export default {
        name: "WriteNotice",
        created() {
        },
        props: [
            'uid'
        ],
        components: {
          VueEditor
        },
        data() {
            return {
                subject: '',
                content: '',
                errorModal: false,
                errorMessage: ''
            }
        },
        methods: {
            submit() {
                console.log('submit');
                const noticeRef = database.ref(`notice/${this.uid}`);
                noticeRef.push({
                    content: this.content,
                    subject: this.subject,
                    createTime: new Date().getTime()
                }, (err) => {
                    if (!!err) {
                        this.errorMessage = err;
                        this.errorModal = true;
                    } else {
                        this.$router.push('/customer/notice');
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>