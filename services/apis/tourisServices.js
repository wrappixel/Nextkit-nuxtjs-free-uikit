import service from '../index'
import { buildQueryString } from '../../core/utils/strings'
export default {
    fetchListAllTours(payload) {
        return service.get(`/api/trip?${buildQueryString(payload)}`)
    },
    fetchListLocations() {
        return service.get(`/api/locations`)
    },
    registerTour(payload) {
        console.log(payload)
        return service.post(`/api/booking`, payload)
    },
    getDetailTour(payload) {
        if (payload.id) {
            return service.get(`/api/trip/${payload.id}`)
        }
    },
  fetchListFetured() {
      return service.get(`/api/trip?featured=true`)
  }
}
