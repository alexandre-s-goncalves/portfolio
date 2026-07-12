export const languages = {
  pt: 'pt',
  en: 'en',
  fr: 'fr',
  es: 'es',
} as const;

export const namespaces = {
  navigation: {
    name: 'navigation',
    keys: {
      home: 'home',
      skills: 'skills',
      projects: 'projects',
      about: 'about',
      settings: 'settings',
    },
  },
  header: {
    name: 'header',
    keys: {
      logoAlt: 'logoAlt',
      openMenuAlt: 'openMenuAlt',
      closeMenuAlt: 'closeMenuAlt',
    },
  },
  footer: {
    name: 'footer',
    keys: {
      bio: 'bio',
      contactTitle: 'contactTitle',
      location: 'location',
      rights: 'rights',
      builtWith: 'builtWith',
    },
  },
  home: {
    name: 'home',
    keys: {
      title: 'title',
      greeting: 'greeting',
      role: 'role',
      bio: 'bio',
      ctaProjects: 'ctaProjects',
      ctaContact: 'ctaContact',
      metricsProjects: 'metricsProjects',
      metricsExperience: 'metricsExperience',
      metricsTech: 'metricsTech',
    },
  },
  skills: {
    name: 'skills',
    keys: {
      title: 'title',
    },
  },
  projects: {
    name: 'projects',
    keys: {
      title: 'title',
    },
  },
  about: {
    name: 'about',
    keys: {
      title: 'title',
    },
  },
  notFound: {
    name: 'notFound',
    keys: {
      title: 'title',
      message: 'message',
      description: 'description',
      backButton: 'backButton',
    },
  },
  settings: {
    name: 'settings',
    keys: {
      title: 'title',
      langTitle: 'langTitle',
      langDesc: 'langDesc',
      themeTitle: 'themeTitle',
      themeDesc: 'themeDesc',
    },
  },
  components: {
    languageSelector: 'components.languageSelector',
  },
} as const;
