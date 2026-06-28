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
      title: 'title',
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
    },
  },
  components: {
    languageSelector: 'components.languageSelector',
  },
} as const;
