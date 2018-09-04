import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        noticeDetail: {},
        adminUid: undefined
    },
    mutations: {
        setNoticeDetail (state, detail) {
            state.noticeDetail = detail;
        },
        setAdminUid(state, uid) {
            state.adminUid = uid;
        }
    }
});

export default store;