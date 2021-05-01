import { createI18n } from "vue-i18n";
import enUs from "@/core/config/lang/en-US.json";
import arSA from "@/core/config/lang/ar-SA.json";

// get current selected language
const lang = localStorage.getItem("app-language") || "en-US";

const i18n = createI18n({
  locale: lang,
  messages: {
    "en-US": enUs,
    "ar-SA": arSA
  },
  legacy: true
});

export default i18n;
