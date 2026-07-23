import {describe, test, expect} from 'vitest';
import {en} from './translation';
import {namespaces} from '../../i18n.constants';

describe('English Translation Integrity System', () => {
  describe('Navigation Namespace', () => {
    const {name, keys} = namespaces.navigation;

    test('should verify all structural navigation dictionary keys exist', () => {
      expect(en).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(en[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for navigation', () => {
      expect(en[name].home).toBe('Home');
      expect(en[name].skills).toBe('Skills');
      expect(en[name].projects).toBe('Projects');
      expect(en[name].about).toBe('About');
      expect(en[name].settings).toBe('Settings');
    });
  });

  describe('Header Namespace', () => {
    const {name, keys} = namespaces.header;

    test('should verify all structural header dictionary keys exist', () => {
      expect(en).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(en[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for header', () => {
      expect(en[name].logoAlt).toBe('Portfolio logo');
      expect(en[name].openMenuAlt).toBe('Open menu');
      expect(en[name].closeMenuAlt).toBe('Close menu');
    });
  });

  describe('Footer Namespace', () => {
    const {name, keys} = namespaces.footer;

    test('should verify all structural footer dictionary keys exist', () => {
      expect(en).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(en[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for footer', () => {
      expect(en[name].bio).toBe(
        'Developer passionate about technology with experience in React.js and React Native. Focused on creating elegant and efficient solutions.',
      );
      expect(en[name].contactTitle).toBe('Contact');
      expect(en[name].location).toBe('Sao Paulo, Brazil');
      expect(en[name].rights).toBe('All rights reserved.');
      expect(en[name].builtWith).toBe('Built with');
    });
  });

  describe('Settings Namespace', () => {
    const {name, keys} = namespaces.settings;

    test('should verify all structural settings dictionary keys exist', () => {
      expect(en).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(en[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for settings', () => {
      expect(en[name].title).toBe('Settings');
      expect(en[name].langTitle).toBe('Interface Language');
      expect(en[name].langDesc).toBe('Change the global website dictionary');
      expect(en[name].themeTitle).toBe('Visual Theme');
      expect(en[name].themeDesc).toBe('Switch between Light and Dark Mode');
    });
  });

  describe('NotFound Namespace', () => {
    const {name, keys} = namespaces.notFound;

    test('should verify all structural notFound dictionary keys exist', () => {
      expect(en).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(en[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for notFound', () => {
      expect(en[name].title).toBe('404');
      expect(en[name].message).toBe('Page not found');
      expect(en[name].description).toBe(
        'The link you tried to access was not found or the route was moved in space-time. Use the button below to return safely.',
      );
      expect(en[name].backButton).toBe('Back to Home');
    });
  });

  describe('Home Page Namespace', () => {
    const {name, keys} = namespaces.home;

    test('should verify all structural home dictionary keys exist', () => {
      expect(en).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(en[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for home page content', () => {
      expect(en[name].title).toBe('Home Page');
      expect(en[name].greeting).toBe('Hi, I am');
      expect(en[name].role).toBe('Full-Stack Developer');
      expect(en[name].bio).toBe(
        'Technology developer passionate about technology with experience in React.js, React Native, .NET and Java. Focused on creating elegant and efficient solutions.',
      );
      expect(en[name].ctaProjects).toBe('View My Projects');
      expect(en[name].ctaContact).toBe('Get in Touch');
      expect(en[name].metricsProjects).toBe('Completed Projects');
      expect(en[name].metricsExperience).toBe('Years of Experience');
      expect(en[name].metricsTech).toBe('Technologies');
    });
  });

  describe('Skills Page Namespace', () => {
    const {name, keys} = namespaces.skills;

    test('should verify all structural skills dictionary keys exist', () => {
      expect(en).toHaveProperty(name);
      expect(en[name].categories).toHaveProperty('frontend');
      expect(en[name].categories).toHaveProperty('tools');
      expect(en[name].levels).toHaveProperty('advanced');
      expect(en[name].levels).toHaveProperty('expert');
      expect(keys.title).toBeDefined();
    });

    test('should lock exact structural value parameters for skills page content', () => {
      expect(en[name].title).toBe('My Skills');
      expect(en[name].categories.frontend).toBe('Frontend & Mobile');
      expect(en[name].categories.tools).toBe('Tools & Testing');
      expect(en[name].levels.expert).toBe('Expert');
      expect(en[name].levels.advanced).toBe('Advanced');
    });
  });

  describe('Projects Page Namespace', () => {
    const {name, keys} = namespaces.projects;

    test('should verify all structural projects dictionary keys exist', () => {
      expect(en).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(en[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for projects page content', () => {
      expect(en[name].title).toBe('Projects Page');
    });
  });

  describe('About Page Namespace', () => {
    const {name, keys} = namespaces.about;

    test('should verify all structural about dictionary keys exist', () => {
      expect(en).toHaveProperty(name);
      expect(en[name].sections).toHaveProperty('bio');
      expect(en[name].sections).toHaveProperty('experience');
      expect(en[name].sections).toHaveProperty('education');

      expect(en[name].paragraphs).toHaveProperty('p1');
      expect(en[name].paragraphs).toHaveProperty('p2');
      expect(en[name].paragraphs).toHaveProperty('p3');
      expect(en[name].paragraphs).toHaveProperty('p4');
      expect(en[name].paragraphs).toHaveProperty('p5');

      expect(en[name].jobs).toHaveProperty('title1');
      expect(en[name].jobs).toHaveProperty('title2');
      expect(en[name].jobs).toHaveProperty('title3');

      expect(en[name].academy).toHaveProperty('title1');
      expect(en[name].academy).toHaveProperty('title2');
      expect(en[name].academy).toHaveProperty('title3');
      expect(en[name].academy).toHaveProperty('title4');

      expect(keys.title).toBeDefined();
    });

    test('should lock exact structural value parameters for about page content', () => {
      expect(en[name].title).toBe('About Me');
      expect(en[name].downloadCv).toBe('Download CV');
      expect(en[name].jobs.company1).toBe('MRV');
      expect(en[name].jobs.company2).toBe('Club Méditerranée');
      expect(en[name].jobs.company3).toBe('Paradise Golf & Lake Resort');
      expect(en[name].academy.school1).toBe(
        'UNINTER Centro Universitário Internacional',
      );
      expect(en[name].academy.school4).toBe('Etec Presidente Vargas');
    });
  });
});
