import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./core/plugins/vuetify";
import i18n from "./core/plugins/vue-i18n";
window.$ = window.jQuery = require("jquery");

createApp(App)
  .use(vuetify)
  .use(router)
  .use(i18n)
  .mount("#app");
