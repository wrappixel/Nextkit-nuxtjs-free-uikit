import tourisServices from "~/services/apis/tourisServices";
import merchantServices from "@/services/apis/merchantServices";
import {SET_LOCALE} from "@/store/locale/constant";


export default {
  setLocale({commit},locale) {
    commit(SET_LOCALE, locale)
  }
}
