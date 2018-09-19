import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/styles/common.scss'

import routes from './router'
import store from './store'

/* eslint-disable */
Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({ routes });

// if (!database) {
    console.log('main.js !database');
    // IE
    var config = {
        apiKey: `${process.env.VUE_APP_FIREBASE_API_KEY}`,
        authDomain: `${process.env.VUE_APP_FIREBASE_AUTH_DOMAIN}`,
        databaseURL: `${process.env.VUE_APP_FIREBASE_DATABASE_URL}`,
        projectId: `${process.env.VUE_APP_FIREBASE_PROJECT_ID}`,
        storageBucket: `${process.env.VUE_APP_FIREBASE_STORAGE_BUCKET}`,
        messagingSenderId: `${process.env.VUE_APP_FIREBASE_MESSAGING_SENDERID}`
    };
    firebase.initializeApp(config);
    // var database = firebase.database();
    Vue.prototype.$database = firebase.database();
// }

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
