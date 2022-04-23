import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createProvider } from './vue-apollo'
import VueCompositionAPI from '@vue/composition-api'

Vue.config.productionTip = false
Vue.use(VueCompositionAPI)

new Vue({
  apolloProvider: createProvider(),
  router,
  render: h => h(App)
}).$mount('#app')
