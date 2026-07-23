import {AcademicItem, JobItem, SkillItem} from 'resources/interface';

export const profile = {
  name: 'Alexandre Gonçalves',
  email: 'alexandre.sgoncalves@outlook.com',
  links: {
    github: 'https://github.com/alexandre-s-goncalves',
    linkedin: 'https://www.linkedin.com/in/alexandre-sgoncalves/',
  },
  skills: [
    {
      name: 'React.js',
      icon: 'react',
      category: 'frontend',
      levelKey: 'levels.expert',
    },
    {
      name: 'React Native',
      icon: 'react',
      category: 'frontend',
      levelKey: 'levels.expert',
    },
    {
      name: 'JavaScript',
      icon: 'javascript',
      category: 'frontend',
      levelKey: 'levels.advanced',
    },
    {
      name: 'TypeScript',
      icon: 'typescript',
      category: 'frontend',
      levelKey: 'levels.advanced',
    },
    {name: 'Git', icon: 'git', category: 'tools', levelKey: 'levels.advanced'},
    {
      name: 'Jest',
      icon: 'jest',
      category: 'tools',
      levelKey: 'levels.advanced',
    },
  ] as SkillItem[],
  academy: [
    {
      title: 'about.academy.title1',
      school: 'about.academy.school1',
      period: 'about.academy.period1',
    },
    {
      title: 'about.academy.title2',
      school: 'about.academy.school2',
      period: 'about.academy.period2',
    },
    {
      title: 'about.academy.title3',
      school: 'about.academy.school3',
      period: 'about.academy.period3',
    },
    {
      title: 'about.academy.title4',
      school: 'about.academy.school4',
      period: 'about.academy.period4',
    },
  ] as AcademicItem[],
  jobs: [
    {
      title: 'about.jobs.title1',
      company: 'about.jobs.company1',
      period: 'about.jobs.period1',
      desc: 'about.jobs.desc1',
    },
    {
      title: 'about.jobs.title2',
      company: 'about.jobs.company2',
      period: 'about.jobs.period2',
      desc: 'about.jobs.desc2',
    },
    {
      title: 'about.jobs.title3',
      company: 'about.jobs.company3',
      period: 'about.jobs.period3',
      desc: 'about.jobs.desc3',
    },
  ] as JobItem[],
} as const;
