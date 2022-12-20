import service from '../index';
import {buildQueryString} from "@/core/utils/strings";

export default {
    async authenticationMerchant(payload) {
        return service.post(`/api/staff?${buildQueryString(payload)}`)
    }
}
