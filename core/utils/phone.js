import { isValidPhoneNumber } from 'libphonenumber-js'

export function validatePhoneNumber(phoneNumber, locale = 'VN') {
  return isValidPhoneNumber(phoneNumber, locale)
}
