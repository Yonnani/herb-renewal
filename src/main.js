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

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
