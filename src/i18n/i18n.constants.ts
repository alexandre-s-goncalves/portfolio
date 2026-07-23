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
      subtitle: 'subtitle',
      footerTitle: 'footerTitle',
      footerDesc: 'footerDesc',
      categories: {
        frontend: 'categories.frontend',
        backend: 'categories.backend',
        tools: 'categories.tools',
      },
      levels: {
        advanced: 'levels.advanced',
        intermediate: 'levels.intermediate',
        expert: 'levels.expert',
      },
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
      subtitle: 'subtitle',
      downloadCv: 'downloadCv',
      sections: {
        bio: 'sections.bio',
        experience: 'sections.experience',
        education: 'sections.education',
      },
      paragraphs: {
        p1: 'paragraphs.p1',
        p2: 'paragraphs.p2',
        p3: 'paragraphs.p3',
        p4: 'paragraphs.p4',
        p5: 'paragraphs.p5',
      },
      jobs: {
        title1: 'jobs.title1',
        company1: 'jobs.company1',
        period1: 'jobs.period1',
        desc1: 'jobs.desc1',
        title2: 'jobs.title2',
        company2: 'jobs.company2',
        period2: 'jobs.period2',
        desc2: 'jobs.desc2',
      },
      academy: {
        degree: 'academy.degree',
        school: 'academy.school',
        period: 'academy.period',
      },
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
