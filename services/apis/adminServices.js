import service from "@/services";

export default {
  fetchContactInformation() {
    return service.get('')
  }
}
