import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import "./static/main.css";
import './static/LaunchMyApp.js';
import './static/main.js';

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
