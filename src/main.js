import Vue from 'vue';
import App from './App.vue';
import '@/assets/css/tailwind.css';

import router from '@/router';
import { dollarFilter, percentFilter } from '@/filter';

import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';
import { VueSpinners } from '@saeris/vue-spinners';

Vue.use(Chartkick.use(Chart));
Vue.use(VueSpinners);

Vue.config.productionTip = false;

Vue.filter('dollar', dollarFilter);
Vue.filter('percent', percentFilter);
new Vue({
  // router: router,
  router,
  render: (h) => h(App),
}).$mount('#app');
