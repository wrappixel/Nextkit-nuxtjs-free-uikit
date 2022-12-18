import {SET_PRODUCT, SET_PRODUCTS, SET_LOCATIONS} from "~/store/product/constant";

export  default {
  [SET_PRODUCT](state, payload) {
    state.product = payload
  },
  [SET_PRODUCTS](state, payload) {
    state.products = payload
  },
  [SET_LOCATIONS](state, payload) {
    state.locations = payload
  }
}
