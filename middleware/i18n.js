import {SET_LOCALE} from "@/store/locale/constant";

export default function ({ isHMR, app, store, route, params, error, redirect }) {
  const defaultLocale = app.i18n.fallbackLocale
  if (isHMR) return
  const locale = store.state.locale || defaultLocale
  app.i18n.locale = locale
  console.log(app.i18n.locale)
}
