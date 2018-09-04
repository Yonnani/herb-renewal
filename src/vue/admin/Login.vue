<template>
    <div>
        <b-row v-if="!adminUid">
            <b-col cols="12" md="6">
                <b-form-group label="관리자 이메일"
                              label-for="email">
                    <b-form-input type="email" id="email" v-model="email"></b-form-input>
                </b-form-group>
                <b-form-group label="비밀번호"
                              label-for="password">
                    <b-form-input type="password" id="password" v-model="password"></b-form-input>
                </b-form-group>
                <b-button variant="info" @click="login">로그인</b-button>
            </b-col>
        </b-row>
        <b-row v-else>
            <b-col>
                <WriteNotice></WriteNotice>
            </b-col>
        </b-row>

        <b-modal v-model="errorModal"
                 header-bg-variant="danger"
                 header-text-variant="light">
            <div slot="modal-header">
                로그인 에러
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
    import WriteNotice from "./WriteNotice";
    export default {
        name: "Login",
        components: {WriteNotice},
        data() {
            return {
                email: '',
                password: '',
                errorMessage: '',
                errorModal: false,
                userUid: ''
            }
        },
        methods: {
            login() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then(result => {
                        this.userUid = result.user.uid;
                        this.$store.commit('setAdminUid', this.userUid);
                    })
                    .catch(error => {
                        this.errorModal = true;
                        this.errorMessage = error.message;
                    });
            }
        },
        computed: {
            adminUid() {
                return this.$store.state.adminUid;
            }
        }
    }
</script>

<style scoped>

</style>