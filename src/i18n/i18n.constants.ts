export const languages = {
  pt: 'pt',
  en: 'en',
  fr: 'fr',
  es: 'es',
} as const;

export const namespaces = {
  header: {
    name: 'header',
    keys: {
      navHome: 'navHome',
      navSkills: 'navSkills',
      navProjects: 'navProjects',
      navAbout: 'navAbout',
      logoAlt: 'logoAlt',
    },
  },
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
