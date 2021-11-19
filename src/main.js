import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'

import router from '@/router'
import { dollarFilter, percentFilter } from '@/filter'

Vue.config.productionTip = false

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
new Vue({
  // router: router,
  router,
  render: (h) => h(App),
}).$mount('#app')
