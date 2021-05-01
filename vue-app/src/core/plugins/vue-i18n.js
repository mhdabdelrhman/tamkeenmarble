import { createI18n } from "vue-i18n";

const messages = {
  "en-US": require("@/core/lang/en-US.json"),
  "ar-SA": require("@/core/lang/en-US.json")
};
// get current selected language
const lang = localStorage.getItem("app-language") || "en-US";

const i18n = createI18n({
  locale: lang,
  messages,
  legacy: true
});

export default i18n;
