import tourisServices from "~/services/apis/tourisServices";
import {SET_PRODUCT, SET_PRODUCTS} from "~/store/product/constant";

export default {
  async fetchDetailProduct({commit}, payload) {
    const result = await tourisServices.getDetailTour(payload)
    if (result.success) commit(SET_PRODUCT, {...result.trip, images: result.images})

    return result
  },

  async fetchAllProducts({commit}, payload) {
    const result = await tourisServices.fetchListAllTours(payload)
    if (result.success) commit(SET_PRODUCTS, {...result.trip})

    return result
  }
}
