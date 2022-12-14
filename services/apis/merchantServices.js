import service from '../index';

export default {
    async authenticationMerchant(payload) {
        return service.post(`/api/merchant`, payload)
    }
}