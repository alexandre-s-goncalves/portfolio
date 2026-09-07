import {describe, expect, test} from 'vitest';
import {fr} from './translation';
import {namespaces} from '../../i18n.constants';

describe('French Translation Integrity System', () => {
  describe('About Page Namespace', () => {
    const {name, keys} = namespaces.about;

    test('should verify all structural about dictionary keys exist', () => {
      expect(fr).toHaveProperty(name);
      expect(fr[name].sections).toHaveProperty('bio');
      expect(fr[name].sections).toHaveProperty('experience');
      expect(fr[name].sections).toHaveProperty('education');

      expect(fr[name].paragraphs).toHaveProperty('p1');
      expect(fr[name].paragraphs).toHaveProperty('p2');
      expect(fr[name].paragraphs).toHaveProperty('p3');
      expect(fr[name].paragraphs).toHaveProperty('p4');
      expect(fr[name].paragraphs).toHaveProperty('p5');

      expect(fr[name].jobs).toHaveProperty('title1');
      expect(fr[name].jobs).toHaveProperty('title2');
      expect(fr[name].jobs).toHaveProperty('title3');

      expect(fr[name].academy).toHaveProperty('title1');
      expect(fr[name].academy).toHaveProperty('title2');
      expect(fr[name].academy).toHaveProperty('title3');
      expect(fr[name].academy).toHaveProperty('title4');

      expect(keys.title).toBeDefined();
    });

    test('should lock exact structural value parameters for about page content', () => {
      expect(fr[name].title).toBe('À Propos');
      expect(fr[name].downloadCv).toBe('Télécharger le CV');
      expect(fr[name].jobs.company1).toBe('MRV');
      expect(fr[name].jobs.company2).toBe('Club Méditerranée');
      expect(fr[name].jobs.company3).toBe('Paradise Golf & Lake Resort');
      expect(fr[name].academy.school1).toBe(
        'UNINTER Centre Universitaire International',
      );
      expect(fr[name].academy.school4).toBe('Etec Presidente Vargas');
    });
  });

  describe('CvModal Namespace', () => {
    const {name, keys} = namespaces.cvModal;

    test('should verify all structural cvModal dictionary keys exist in french', () => {
      expect(fr).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(fr[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for french cvModal elements', () => {
      expect(fr[name].brazilFormat).toBe('Format Brésil');
      expect(fr[name].closeButton).toBe('Quitter');
      expect(fr[name].internationalFormat).toBe('Format International');
      expect(fr[name].printBrLabel).toBe('Curriculum BR');
      expect(fr[name].printCvLabel).toBe('Résumé');
      expect(fr[name].printLetterLabel).toBe('Cover Letter');
      expect(fr[name].titleText).toBe('Télécharger les Documents');
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
        'Développeur passionné de technologie avec de l’expérience en React.js et React Native. Axé sur la création de solutions élégantes et efficaces.',
      );
      expect(fr[name].contactTitle).toBe('Contact');
      expect(fr[name].location).toBe('Sao Paulo, Brésil');
      expect(fr[name].rights).toBe('Tous droits réservés.');
      expect(fr[name].builtWith).toBe('Créé avec');
    });
  });

  describe('Header Namespace', () => {
    const {name, keys} = namespaces.header;

    test('should verify all structural header dictionary keys exist', () => {
      expect(fr).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(fr[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for header', () => {
      expect(fr[name].logoAlt).toBe('Logotype du portfolio');
      expect(fr[name].openMenuAlt).toBe('Ouvrir le menu');
      expect(fr[name].closeMenuAlt).toBe('Fermer le menu');
    });
  });

  describe('Home Page Namespace', () => {
    const {name, keys} = namespaces.home;

    test('should verify all structural home dictionary keys exist', () => {
      expect(fr).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(fr[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for home page content', () => {
      expect(fr[name].title).toBe('Page d’Accueil');
      expect(fr[name].greeting).toBe('Bonjour, je suis');
      expect(fr[name].role).toBe('Développeur Full-Stack');
      expect(fr[name].bio).toBe(
        'Développeur passionné de technologie avec de l’expérience en React.js, React Native, .NET et Java. Axé sur la création de solutions élégantes et efficaces.',
      );
      expect(fr[name].ctaProjects).toBe('Voir Mes Projets');
      expect(fr[name].ctaContact).toBe('Prendre Contact');
      expect(fr[name].metricsProjects).toBe('Projets');
      expect(fr[name].metricsExperience).toBe('Années d’Expérience');
      expect(fr[name].metricsTech).toBe('Technologies');
    });
  });

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
      expect(fr[name].about).toBe('À Propos');
      expect(fr[name].settings).toBe('Paramètres');
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
        'Le lien que vous avez tenté de rejoindre n’existe pas ou la route a été déplacée dans l’espace-temps. Utilisez le bouton ci-dessous pour revenir en toute sécurité.',
      );
      expect(fr[name].backButton).toBe('Retour à l’Accueil');
    });
  });

  describe('Projects Page Namespace', () => {
    const {name, keys} = namespaces.projects;

    test('should verify all structural projects dictionary keys exist', () => {
      expect(fr).toHaveProperty(name);
      expect(fr[name].status).toHaveProperty('completed');
      expect(fr[name].status).toHaveProperty('progress');
      expect(fr[name].items.portfolio).toHaveProperty('title');
      expect(fr[name].items.portfolio).toHaveProperty('desc');
      expect(keys.title).toBeDefined();
    });

    test('should lock exact structural value parameters for projects page content', () => {
      expect(fr[name].title).toBe('Mes Projets');
      expect(fr[name].ctaView).toBe('Voir le Projet');
      expect(fr[name].ctaCode).toBe('Voir le Code');
      expect(fr[name].status.completed).toBe('Terminé');
      expect(fr[name].items.portfolio.title).toBe('Portfolio Personnel');
    });
  });

  describe('Settings Namespace', () => {
    const {name, keys} = namespaces.settings;

    test('should verify all structural settings dictionary keys exist', () => {
      expect(fr).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(fr[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for settings', () => {
      expect(fr[name].title).toBe('Paramètres');
      expect(fr[name].langTitle).toBe('Langue de l’Interface');
      expect(fr[name].langDesc).toBe('Changer le dictionnaire global du site');
      expect(fr[name].themeTitle).toBe('Thème Visuel');
      expect(fr[name].themeDesc).toBe(
        'Basculer entre Mode Clair et Mode Sombre',
      );
    });
  });

  describe('Skills Page Namespace', () => {
    const {name, keys} = namespaces.skills;

    test('should verify all structural skills dictionary keys exist', () => {
      expect(fr).toHaveProperty(name);
      expect(fr[name].categories).toHaveProperty('frontend');
      expect(fr[name].categories).toHaveProperty('tools');
      expect(fr[name].levels).toHaveProperty('advanced');
      expect(fr[name].levels).toHaveProperty('expert');
      expect(keys.title).toBeDefined();
    });

    test('should lock exact structural value parameters for skills page content', () => {
      expect(fr[name].title).toBe('Mes Compétences');
      expect(fr[name].categories.frontend).toBe('Frontend & Mobile');
      expect(fr[name].categories.tools).toBe('Outils & Tests');
      expect(fr[name].levels.expert).toBe('Expert');
      expect(fr[name].levels.advanced).toBe('Avancé');
    });
  });
});
