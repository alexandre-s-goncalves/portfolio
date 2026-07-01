import {describe, test, expect} from 'vitest';
import {namespaces} from '../../i18n.constants';
import {fr} from './translation';

describe('French Translation Content Assertions', () => {
  const navName = namespaces.navigation.name;
  const navKeys = namespaces.navigation.keys;
  const homeName = namespaces.home.name;
  const homeKeys = namespaces.home.keys;
  const skillsName = namespaces.skills.name;
  const skillsKeys = namespaces.skills.keys;
  const projectsName = namespaces.projects.name;
  const projectsKeys = namespaces.projects.keys;
  const aboutName = namespaces.about.name;
  const aboutKeys = namespaces.about.keys;
  const notFoundName = namespaces.notFound.name;
  const notFoundKeys = namespaces.notFound.keys;
  const headerName = namespaces.header.name;
  const headerKeys = namespaces.header.keys;
  const footerName = namespaces.footer.name;
  const footerKeys = namespaces.footer.keys;
  const settingsName = namespaces.settings.name;
  const settingsKeys = namespaces.settings.keys;

  test('should verify that namespaces contain all required keys', () => {
    expect(fr).toHaveProperty(navName);
    expect(fr[navName]).toHaveProperty(navKeys.home);
    expect(fr[navName]).toHaveProperty(navKeys.skills);
    expect(fr[navName]).toHaveProperty(navKeys.projects);
    expect(fr[navName]).toHaveProperty(navKeys.about);
    expect(fr[navName]).toHaveProperty(navKeys.settings);

    expect(fr).toHaveProperty(homeName);
    expect(fr[homeName]).toHaveProperty(homeKeys.title);

    expect(fr).toHaveProperty(skillsName);
    expect(fr[skillsName]).toHaveProperty(skillsKeys.title);

    expect(fr).toHaveProperty(projectsName);
    expect(fr[projectsName]).toHaveProperty(projectsKeys.title);

    expect(fr).toHaveProperty(aboutName);
    expect(fr[aboutName]).toHaveProperty(aboutKeys.title);

    expect(fr).toHaveProperty(notFoundName);
    expect(fr[notFoundName]).toHaveProperty(notFoundKeys.title);
    expect(fr[notFoundName]).toHaveProperty(notFoundKeys.message);

    expect(fr).toHaveProperty(headerName);
    expect(fr[headerName]).toHaveProperty(headerKeys.logoAlt);
    expect(fr[headerName]).toHaveProperty(headerKeys.openMenuAlt);
    expect(fr[headerName]).toHaveProperty(headerKeys.closeMenuAlt);

    expect(fr).toHaveProperty(footerName);
    expect(fr[footerName]).toHaveProperty(footerKeys.bio);
    expect(fr[footerName]).toHaveProperty(footerKeys.contactTitle);
    expect(fr[footerName]).toHaveProperty(footerKeys.location);
    expect(fr[footerName]).toHaveProperty(footerKeys.rights);
    expect(fr[footerName]).toHaveProperty(footerKeys.builtWith);

    expect(fr).toHaveProperty(settingsName);
    expect(fr[settingsName]).toHaveProperty(settingsKeys.title);
    expect(fr[settingsName]).toHaveProperty(settingsKeys.langTitle);
    expect(fr[settingsName]).toHaveProperty(settingsKeys.langDesc);
    expect(fr[settingsName]).toHaveProperty(settingsKeys.themeTitle);
    expect(fr[settingsName]).toHaveProperty(settingsKeys.themeDesc);
  });

  test('should ensure all french strings are valid and filled', () => {
    expect(typeof fr[navName].home).toBe('string');
    expect(fr[navName].home.length).toBeGreaterThan(0);
    expect(typeof fr[homeName].title).toBe('string');
    expect(fr[homeName].title.length).toBeGreaterThan(0);
    expect(typeof fr[footerName].bio).toBe('string');
    expect(fr[footerName].bio.length).toBeGreaterThan(0);
    expect(typeof fr[settingsName].title).toBe('string');
    expect(fr[settingsName].title.length).toBeGreaterThan(0);
  });

  test('should lock exact official text values for french language', () => {
    expect(fr[navName].home).toBe('Accueil');
    expect(fr[navName].skills).toBe('Compétences');
    expect(fr[navName].projects).toBe('Projets');
    expect(fr[navName].about).toBe('À propos');
    expect(fr[navName].settings).toBe('Paramètres');

    expect(fr[homeName].title).toBe("Page d'accueil");
    expect(fr[skillsName].title).toBe('Page des compétences');
    expect(fr[projectsName].title).toBe('Page des projets');
    expect(fr[aboutName].title).toBe('Page à propos');
    expect(fr[notFoundName].title).toBe('404');
    expect(fr[notFoundName].message).toBe('Page non trouvée');

    expect(fr[headerName].logoAlt).toBe('Logo du portfolio');
    expect(fr[headerName].openMenuAlt).toBe('Ouvrir le menu');
    expect(fr[headerName].closeMenuAlt).toBe('Fermer le menu');

    expect(fr[footerName].bio).toBe(
      'Développeur passionné par la technologie avec de l’expérience en React.js et React Native. Axé sur la création de solutions élégantes et efficaces.',
    );
    expect(fr[footerName].contactTitle).toBe('Contact');
    expect(fr[footerName].location).toBe('São Paulo, Brésil');
    expect(fr[footerName].rights).toBe('Tous droits réservés.');
    expect(fr[footerName].builtWith).toBe('Propulsé par');

    expect(fr[settingsName].title).toBe('Paramètres');
    expect(fr[settingsName].langTitle).toBe('Langue de l’interface');
    expect(fr[settingsName].langDesc).toBe(
      'Changer le dictionnaire global du site',
    );
    expect(fr[settingsName].themeTitle).toBe('Thème Visuel');
    expect(fr[settingsName].themeDesc).toBe(
      'Basculer entre le mode clair et sombre',
    );
  });
});
