import tourisServices from "~/services/apis/tourisServices";
import {SET_PRODUCT, SET_PRODUCTS} from "~/store/trip/constant";

export default {
  async fetchDetailTrip({commit}, payload) {
    const result = await tourisServices.getDetailTour(payload)
    return result
  },

  async fetchAllTrips({commit}, payload) {
    const result = await tourisServices.fetchListAllTours(payload)

    return result
  }
}
