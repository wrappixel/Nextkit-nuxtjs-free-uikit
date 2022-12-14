export default (context, inject) =>  {
  inject('isMobileApp', (device) => {
    return device.$device.isMobile
  })
}
