export const languages = {
  pt: 'pt',
  en: 'en',
  fr: 'fr',
  es: 'es',
} as const;

export const namespaces = {
  home: {
    name: 'home',
    keys: {
      welcome: 'welcome',
      subtitle: 'subtitle',
    },
  },
  components: {
    languageSelector: 'components.languageSelector',
  },
} as const;
