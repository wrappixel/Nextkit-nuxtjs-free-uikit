import tourisServices from "~/services/apis/tourisServices";
import merchantServices from "@/services/apis/merchantServices";


export default {
  async signInWithDealer(_, payload) {
    return await merchantServices.authenticationMerchant(payload)
  }
}
