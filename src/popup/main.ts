import Vue from 'vue';

import Antd from 'ant-design-vue';

import router from '@/popup/routes';
import App from '@/popup/App.vue';


// ant design css
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
