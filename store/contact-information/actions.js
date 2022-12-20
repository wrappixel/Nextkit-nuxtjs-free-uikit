import adminServices from "@/services/apis/adminServices";

export default {
  async fetchContactInformation () {
    return await adminServices.fetchContactInformation()
  }
}
