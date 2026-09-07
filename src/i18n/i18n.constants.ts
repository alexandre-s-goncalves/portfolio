export const languages = {
  en: 'en',
  es: 'es',
  fr: 'fr',
  pt: 'pt',
} as const;

export const namespaces = {
  about: {
    name: 'about',
    keys: {
      academy: {
        degree: 'academy.degree',
        period: 'academy.period',
        school: 'academy.school',
      },
      downloadCv: 'downloadCv',
      jobs: {
        company1: 'jobs.company1',
        company2: 'jobs.company2',
        desc1: 'jobs.desc1',
        desc2: 'jobs.desc2',
        period1: 'jobs.period1',
        period2: 'jobs.period2',
        title1: 'jobs.title1',
        title2: 'jobs.title2',
      },
      paragraphs: {
        p1: 'paragraphs.p1',
        p2: 'paragraphs.p2',
        p3: 'paragraphs.p3',
        p4: 'paragraphs.p4',
        p5: 'paragraphs.p5',
      },
      sections: {
        education: 'sections.education',
        experience: 'sections.experience',
        bio: 'sections.bio',
      },
      subtitle: 'subtitle',
      title: 'title',
    },
  },
  components: {
    languageSelector: 'components.languageSelector',
  },
  cvModal: {
    name: 'cvModal',
    keys: {
      brazilFormat: 'brazilFormat',
      closeButton: 'closeButton',
      internationalFormat: 'internationalFormat',
      printBrLabel: 'printBrLabel',
      printCvLabel: 'printCvLabel',
      printLetterLabel: 'printLetterLabel',
      titleText: 'titleText',
    },
  },
  footer: {
    name: 'footer',
    keys: {
      bio: 'bio',
      builtWith: 'builtWith',
      contactTitle: 'contactTitle',
      location: 'location',
      rights: 'rights',
    },
  },
  header: {
    name: 'header',
    keys: {
      closeMenuAlt: 'closeMenuAlt',
      logoAlt: 'logoAlt',
      openMenuAlt: 'openMenuAlt',
    },
  },
  home: {
    name: 'home',
    keys: {
      bio: 'bio',
      ctaContact: 'ctaContact',
      ctaProjects: 'ctaProjects',
      greeting: 'greeting',
      metricsExperience: 'metricsExperience',
      metricsProjects: 'metricsProjects',
      metricsTech: 'metricsTech',
      role: 'role',
      title: 'title',
    },
  },
  navigation: {
    name: 'navigation',
    keys: {
      about: 'about',
      home: 'home',
      projects: 'projects',
      settings: 'settings',
      skills: 'skills',
    },
  },
  notFound: {
    name: 'notFound',
    keys: {
      backButton: 'backButton',
      description: 'description',
      message: 'message',
      title: 'title',
    },
  },
  projects: {
    name: 'projects',
    keys: {
      title: 'title',
    },
  },
  settings: {
    name: 'settings',
    keys: {
      langDesc: 'langDesc',
      langTitle: 'langTitle',
      themeDesc: 'themeDesc',
      themeTitle: 'themeTitle',
      title: 'title',
    },
  },
  skills: {
    name: 'skills',
    keys: {
      categories: {
        backend: 'categories.backend',
        frontend: 'categories.frontend',
        tools: 'categories.tools',
      },
      footerDesc: 'footerDesc',
      footerTitle: 'footerTitle',
      levels: {
        advanced: 'levels.advanced',
        expert: 'levels.expert',
        intermediate: 'levels.intermediate',
      },
      subtitle: 'subtitle',
      title: 'title',
    },
  },
} as const;
