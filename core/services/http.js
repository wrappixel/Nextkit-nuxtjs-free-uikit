import { setClient } from '@/services'

export default function ({ $axios, redirect, isClient }) {
  setClient($axios)
  const merchantHeader = getMerchantFromStorage()

  if (merchantHeader.length) {
    $axios.setHeader("X-Merchant-Access", merchantHeader)
  }

  $axios.onResponse(resp => {
    if (resp.status === 200) {
      return {...resp.data}
    }
  })

  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}

const getMerchantFromStorage = () => {
  
  // if (localstorage.merchant) {
  //   const merchant = {}
  //   return btoa(JSON.stringify(merchant))
  // }
  return ""
}