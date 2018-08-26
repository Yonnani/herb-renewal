<template>
    <div>
        <b-row class="p-3">
            <b-col>
                <b-form-group horizontal>
                    <template slot="label">
                        <label for="writer">작성자 <span class="text-danger">*</span></label>
                    </template>
                    <b-form-input id="writer"></b-form-input>
                </b-form-group>
                <b-form-group horizontal>
                    <template slot="label">
                        <label for="contactNumber">연락처 <span class="text-danger">*</span></label>
                    </template>
                    <b-input-group id="contactNumber">
                        <b-form-input id="contactNumber1"></b-form-input>
                        <span>&nbsp; - &nbsp;</span>
                        <b-form-input id="contactNumber2"></b-form-input>
                        <span>&nbsp; - &nbsp;</span>
                        <b-form-input id="contactNumber3"></b-form-input>
                    </b-input-group>
                </b-form-group>
                <b-form-group horizontal>
                    <template slot="label">
                        <label for="email">이메일 <span class="text-danger">*</span></label>
                    </template>
                    <b-input-group id="email">
                        <b-form-input id="emailID"></b-form-input>
                    </b-input-group>
                </b-form-group>
                <b-form-group horizontal>
                    <template slot="label">
                        <label for="subject">제목 <span class="text-danger">*</span></label>
                    </template>
                    <b-form-input id="subject"></b-form-input>
                </b-form-group>
                <b-form-group horizontal>
                    <template slot="label">
                        <label for="content">내용 <span class="text-danger">*</span></label>
                    </template>
                    <b-form-textarea id="content"
                                     placeholder="Enter something"
                                     :rows="3"
                                     :max-rows="6"></b-form-textarea>
                </b-form-group>
                <b-form-group horizontal>
                    <template slot="label">
                        <label for="attachment">첨부파일</label>
                    </template>
                    <b-form-file class="mt-3" plain></b-form-file>
                    <p>파일은 최대 10MB까지 업로드 할 수 있습니다.</p>
                </b-form-group>
                <b-form-group horizontal>
                    <template slot="label">
                        <label for="privacy">개인정보 처리방침 <span class="text-danger">*</span></label>
                    </template>
                    <ul>
                        <li>수집항목 : 성명/연락처/이메일</li>
                        <li>수집목적 : 온라인문의 신청 시 상담용으로 활용</li>
                        <li>보유 및 이용기간 : 개인정보 수집 목적 달성 후에는 해당 정보 파기</li>
                    </ul>
                    <b-form-checkbox value="accepted"
                                     unchecked-value="not_accepted">
                        개인정보 수집 및 이용에 동의
                    </b-form-checkbox>
                </b-form-group>
                <p><span class="text-danger">*</span> 표시 항목은 필수 입력 항목입니다.</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="text-right">
                <b-button variant="outline-primary">취소</b-button>
                <b-button variant="primary" @click="send">보내기</b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: 'EstimateRequest',
        methods: {
            send() {
                console.log('click submit');
                var templateParams = {
                    name: 'James',
                    notes: 'Check this out!'
                };
                var emailjs = require('emailjs-com');
                console.log(emailjs);
                emailjs.send()
                    .then(function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            }
        }
    }
</script>