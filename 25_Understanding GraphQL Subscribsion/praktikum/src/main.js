import Vue from "vue";
import App from "./App.vue";
import { createProvider } from "./vue-apollo";
import vuetify from "./plugins/vuetify";
import router from "./router/index";

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider: createProvider(),
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
