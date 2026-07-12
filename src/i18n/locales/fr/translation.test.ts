import {describe, test, expect} from 'vitest';
import {fr} from './translation';
import {namespaces} from '../../i18n.constants';

describe('French Translation Integrity System', () => {
  describe('Navigation Namespace', () => {
    const {name, keys} = namespaces.navigation;

    test('should verify all structural navigation dictionary keys exist', () => {
      expect(fr).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(fr[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for navigation', () => {
      expect(fr[name].home).toBe('Accueil');
      expect(fr[name].skills).toBe('Compétences');
      expect(fr[name].projects).toBe('Projets');
      expect(fr[name].about).toBe('À propos');
      expect(fr[name].settings).toBe('Réglages');
    });
  });

  describe('Header Namespace', () => {
    const {name, keys} = namespaces.header;

    test('should verify all structural header dictionary keys exist', () => {
      expect(fr).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(fr[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for header', () => {
      expect(fr[name].logoAlt).toBe('Logo du portfolio');
      expect(fr[name].openMenuAlt).toBe('Ouvrir le menu');
      expect(fr[name].closeMenuAlt).toBe('Fermer le menu');
    });
  });

  describe('Footer Namespace', () => {
    const {name, keys} = namespaces.footer;

    test('should verify all structural footer dictionary keys exist', () => {
      expect(fr).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(fr[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for footer', () => {
      expect(fr[name].bio).toBe(
        'Développeur passionné par la technologie avec de l’expérience en React.js et React Native. Axé sur la création de solutions élégantes et efficaces.',
      );
      expect(fr[name].contactTitle).toBe('Contact');
      expect(fr[name].location).toBe('Sao Paulo, Brésil');
      expect(fr[name].rights).toBe('Tous droits réservés.');
      expect(fr[name].builtWith).toBe('Construit avec');
    });
  });

  describe('Settings Namespace', () => {
    const {name, keys} = namespaces.settings;

    test('should verify all structural settings dictionary keys exist', () => {
      expect(fr).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(fr[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for settings', () => {
      expect(fr[name].title).toBe('Réglages');
      expect(fr[name].langTitle).toBe('Langue de l’interface');
      expect(fr[name].langDesc).toBe('Changer le dictionnaire global du site');
      expect(fr[name].themeTitle).toBe('Thème Visuel');
      expect(fr[name].themeDesc).toBe('Basculer entre le mode clair et sombre');
    });
  });

  describe('NotFound Namespace', () => {
    const {name, keys} = namespaces.notFound;

    test('should verify all structural notFound dictionary keys exist', () => {
      expect(fr).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(fr[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for notFound', () => {
      expect(fr[name].title).toBe('404');
      expect(fr[name].message).toBe('Page non trouvée');
      expect(fr[name].description).toBe(
        "Le lien que vous avez essayé d'accéder est introuvable ou a été déplacé dans l'espace-temps. Utilisez le bouton ci-dessous pour revenir en toute sécurité.",
      );
      expect(fr[name].backButton).toBe('Retour à l’accueil');
    });
  });

  describe('Home Page Namespace', () => {
    const {name, keys} = namespaces.home;

    test('should verify all structural home dictionary keys exist', () => {
      expect(fr).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(fr[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for home page content', () => {
      expect(fr[name].title).toBe('Page d’accueil');
      expect(fr[name].greeting).toBe('Bonjour, je suis');
      expect(fr[name].role).toBe('Développeur Full-Stack');
      expect(fr[name].bio).toBe(
        'Développeur passionné par la technologie avec de l’expérience en React.js, React Native, .NET et Java. Axé sur la création de solutions élégantes et efficaces.',
      );
      expect(fr[name].ctaProjects).toBe('Voir Mes Projets');
      expect(fr[name].ctaContact).toBe('Contactez-moi');
      expect(fr[name].metricsProjects).toBe('Projets Réalisés');
      expect(fr[name].metricsExperience).toBe('Années d’Expérience');
      expect(fr[name].metricsTech).toBe('Technologies');
    });
  });

  describe('Skills Page Namespace', () => {
    const {name, keys} = namespaces.skills;

    test('should verify all structural skills dictionary keys exist', () => {
      expect(fr).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(fr[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for skills page content', () => {
      expect(fr[name].title).toBe('Page des compétences');
    });
  });

  describe('Projects Page Namespace', () => {
    const {name, keys} = namespaces.projects;

    test('should verify all structural projects dictionary keys exist', () => {
      expect(fr).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(fr[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for projects page content', () => {
      expect(fr[name].title).toBe('Page des projets');
    });
  });

  describe('About Page Namespace', () => {
    const {name, keys} = namespaces.about;

    test('should verify all structural about dictionary keys exist', () => {
      expect(fr).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(fr[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for about page content', () => {
      expect(fr[name].title).toBe('Page à propos');
    });
  });
});
