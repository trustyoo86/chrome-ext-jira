import Vue from 'vue';

import router from '@/popup/routes';
import App from '@/popup/App.vue';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
