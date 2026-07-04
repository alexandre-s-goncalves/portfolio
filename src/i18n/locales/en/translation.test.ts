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
    });
  });

  describe('Skills Page Namespace', () => {
    const {name, keys} = namespaces.skills;

    test('should verify all structural skills dictionary keys exist', () => {
      expect(en).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(en[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for skills page content', () => {
      expect(en[name].title).toBe('Skills Page');
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
      Object.values(keys).forEach(key => expect(en[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for about page content', () => {
      expect(en[name].title).toBe('About Page');
    });
  });
});
