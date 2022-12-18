import {SET_PRODUCT, SET_PRODUCTS} from "~/store/trip/constant";

export  default {
  [SET_PRODUCT](state, payload) {
    state.product = payload
  },
  [SET_PRODUCTS](state, payload) {
    state.products = payload
  }
}
