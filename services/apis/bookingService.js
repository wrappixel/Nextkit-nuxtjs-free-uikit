import service from '../index'
import {buildQueryString} from '../../core/utils/strings'

export default {
  createBooking(payload) {
    return service.post(`/api/booking`, payload)
  },
}
