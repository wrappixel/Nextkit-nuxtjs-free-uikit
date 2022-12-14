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
    alwaysRedirect: false,
    fallbackLocale: '',
    redirectOn: 'root',
    useCookie: false,
    cookieCrossOrigin: false,
    cookieDomain: null,
    cookieKey: 'i18n_redirected',
    cookieSecure: false,
  },
  langDir: "locales/",
  vueI18nLoader: true,
  defaultLocale: "vi",

  vueI18n: {
    fallbackLocale: "vi",
  },
  strategy: "no_prefix",
  skipSettingLocaleOnNavigate: true
}
