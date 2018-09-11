<template>
    <div>
        <b-row class="p-3">
            <b-col class="pt-4">
                <b-form id="emailForm">
                    <b-form-group horizontal>
                        <template slot="label">
                            <label for="writer">작성자 <span class="text-danger">*</span></label>
                        </template>
                        <b-form-input id="writer" name="writer" v-model="params.writer"
                                      v-validate="'required|max:100'"
                                      :state="isFirstLoad ? null : !errors.has('writer')"></b-form-input>
                        <b-form-invalid-feedback>
                            작성자는 필수값입니다. 100자 이하로 작성자를 입력해 주십시오.
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group horizontal>
                        <template slot="label">
                            <label for="contactNumber">연락처 <span class="text-danger">*</span></label>
                        </template>
                        <b-form-input id="contactNumber" name="contactNumber"
                                      v-model="params.contactNumber"
                                      v-validate="'required|max:20'"
                                      :state="isFirstLoad ? null : !errors.has('contactNumber')"
                                      placeholder="000-0000-0000"></b-form-input>
                        <b-form-invalid-feedback>
                            연락처는 필수값입니다. 20자 이하로 연락처를 입력해 주십시오.
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group horizontal>
                        <template slot="label">
                            <label for="email">이메일 <span class="text-danger">*</span></label>
                        </template>
                        <b-form-input id="email" name="email"
                                      v-model="params.email"
                                      v-validate="'required|email'"
                                      :state="isFirstLoad ? null : !errors.has('email')"></b-form-input>
                        <b-form-invalid-feedback>
                            이메일은 필수값입니다. 유효한 이메일 주소를 넣어주십시오.
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group horizontal>
                        <template slot="label">
                            <label for="subject">제목 <span class="text-danger">*</span></label>
                        </template>
                        <b-form-input id="subject" name="subject"
                                      v-model="params.subject"
                                      v-validate="'required|max:200'"
                                      :state="isFirstLoad ? null : !errors.has('subject')"></b-form-input>
                        <b-form-invalid-feedback>
                            제목은 필수값입니다. 200자 이하로 제목을 입력해 주십시오.
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group horizontal>
                        <template slot="label">
                            <label for="content">내용 <span class="text-danger">*</span></label>
                        </template>
                        <b-form-textarea id="content"
                                         :rows="6"
                                         :max-rows="12"
                                         name="content"
                                         v-model="params.content"
                                         v-validate="'required'"
                                         :state="isFirstLoad ? null : !errors.has('content')"></b-form-textarea>
                        <b-form-invalid-feedback>
                            내용은 필수값입니다.
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <!--<b-form-group horizontal>-->
                        <!--<template slot="label">-->
                            <!--<label for="attachment">첨부파일</label>-->
                        <!--</template>-->
                        <!--<b-form-file class="mt-3" plain name="file"></b-form-file>-->
                        <!--<p>파일은 최대 10MB까지 업로드 할 수 있습니다.</p>-->
                    <!--</b-form-group>-->
                    <b-form-group horizontal>
                        <template slot="label">
                            <label for="privacy">개인정보 처리방침 <span class="text-danger">*</span></label>
                        </template>
                        <ul>
                            <li>수집항목 : 성명/연락처/이메일</li>
                            <li>수집목적 : 온라인문의 신청 시 상담용으로 활용</li>
                            <li>보유 및 이용기간 : 개인정보 수집 목적 달성 후에는 해당 정보 파기</li>
                        </ul>
                        <b-form-checkbox :value="true"
                                         :unchecked-value="false"
                                         name="agree"
                                         v-validate="'required:true'"
                                         v-model="agreeVal"
                                         :state="isFirstLoad ? null : !errors.has('agree')">
                            개인 정보 수집 및 이용에 동의
                        </b-form-checkbox>
                        <b-form-invalid-feedback>
                            개인 정보 수집 및 이용에 동의해 주십시오.
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <p><span class="text-danger">*</span> 표시 항목은 필수 입력 항목입니다.</p>
                </b-form>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="text-right">
                <b-button class="m-1" variant="outline-primary" @click="reset"
                          :disabled="loading">취소</b-button>
                <b-button class="m-1" variant="primary" @click="send" :disabled="loading">
                    <span v-if="!loading">보내기</span>
                    <ClipLoader v-else :loading="loading" :color="'white'" :size="'18px'"></ClipLoader>
                </b-button>
            </b-col>
        </b-row>

        <b-modal v-model="successModal"
                 header-bg-variant="success"
                 header-text-variant="light">
            <div slot="modal-header">
                견적 요청 결과
            </div>
            <p class="my-4">견적이 정상적으로 요청되었습니다.</p>
            <div slot="modal-footer" class="mt-0 px-2">
                <b-btn variant="default" class="float-right" @click="successModal=false">닫기</b-btn>
            </div>
        </b-modal>

        <b-modal v-model="errorModal"
                 header-bg-variant="danger"
                 header-text-variant="light">
            <div slot="modal-header">
                견적 요청 결과
            </div>
            <p class="my-4">견적 요청이 실패하였습니다.<br>잠시 후에 다시 시도하여 주십시오.</p>
            <div slot="modal-footer" class="mt-0 px-2">
                <b-btn variant="default" class="float-right" @click="errorModal=false">닫기</b-btn>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VeeValidate from 'vee-validate';
    import ClipLoader from 'vue-spinner/src/ClipLoader'

    Vue.use(VeeValidate, { fieldsBagName: 'veeFields' });

    /* eslint-disable */
    export default {
        name: 'EstimateRequest',
        components: {
            ClipLoader
        },
        data() {
            return {
                successModal: false,
                errorModal: false,
                params: {
                    content: '',
                    writer: '',
                    contactNumber: '',
                    email: '',
                    subject: ''
                },
                agreeVal: false,
                isFirstLoad: true,
                loading: false
            }
        },
        methods: {
            send() {
                this.loading = true;
                this.isFirstLoad = false;
                this.$validator.validateAll()
                    .then(result => {
                        if (result) {
                            // const form = document.getElementById('emailForm');
                            const emailjs = require('emailjs-com');
                            const that = this;
                            emailjs
                                .send(
                                    process.env.VUE_APP_EMAIL_SERVICE_ID,
                                    process.env.VUE_APP_EMAIL_TEMPLATE_ID,
                                    that.params,
                                    process.env.VUE_APP_EMAIL_USER_ID
                                ).then(function(response) {
                                    // console.log('SUCCESS!', response.status, response.text);
                                    that.successModal = true;
                                    that.reset();
                                    that.loading = false;
                                }, function(error) {
                                    console.log('FAILED...', error);
                                    that.errorModal = true;
                                    that.loading = false;
                                });
                        } else {
                            this.loading = false;
                        }
                    });
            },
            reset() {
                this.params.contactNumber = '';
                this.params.content = '';
                this.params.email = '';
                this.params.subject = '';
                this.params.writer = '';
                this.agreeVal = false;
                this.isFirstLoad = true;
            }
        }
    }
</script>