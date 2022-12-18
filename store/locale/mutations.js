import {SET_PRODUCT, SET_PRODUCTS} from "~/store/product/constant";
import {SET_LOCALE} from "@/store/locale/constant";

export  default {
  [SET_LOCALE](state, payload) {
    state.locale = payload
  }
}
