import Vue from 'vue';
import VueResource from 'vue-resource';
import router from './router/router.js'
require("./style.scss");
Vue.use(VueResource);

import App from './components/app/app.vue';
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
