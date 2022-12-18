import isValidPhoneNumber from 'libphonenumbers'

export function validatePhoneNumber(phoneNumber, locale = 'VN') {
  return isValidPhoneNumber(phoneNumber, locale)
}
