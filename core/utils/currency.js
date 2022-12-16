export function formatCurrency(price = 0, locales = 'vi') {
  const currentLocale = locales
  const type = getCurrencyByLocales(currentLocale)
  const currency = new Intl.NumberFormat(currentLocale, {
    style: 'currency', currency: type, maximumFractionDigits: 3
  }).format(price)
  return currency
}

export function formatPercentage(price) {
  new Intl.NumberFormat((price / 100), {style: 'percent', maximumFractionDigits: 3}).format(price)
}


function getCurrencyByLocales(locale) {
  switch (locale) {
    case 'vi':
      return 'VND'
    case 'en':
      return 'USD'
    default:
      return 'VND'
  }
}
