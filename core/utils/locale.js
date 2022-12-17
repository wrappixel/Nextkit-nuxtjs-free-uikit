export default {
  locales: [
    {
      code: "vi",
      file: "vi.json",
      name: "VN",
    },
    {
      code: "en",
      file: "en.json",
      name: "EN",
    },
  ],
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root',  // recommended
  },
  lazy: true,
  langDir: "locales/",
  vueI18nLoader: true,
  defaultLocale: "vi",

  vueI18n: {
    fallbackLocale: "vi",
  },
  strategy: "no_prefix",
}
