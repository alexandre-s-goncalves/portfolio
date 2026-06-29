import {describe, test, expect} from 'vitest';
import {namespaces} from '../../i18n.constants';
import {fr} from './translation';

describe('French Translation Content Assertions', () => {
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

  test('should verify that namespaces contain all required keys', () => {
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
    expect(fr[headerName]).toHaveProperty(headerKeys.navHome);
    expect(fr[headerName]).toHaveProperty(headerKeys.navSkills);
    expect(fr[headerName]).toHaveProperty(headerKeys.navProjects);
    expect(fr[headerName]).toHaveProperty(headerKeys.navAbout);
    expect(fr[headerName]).toHaveProperty(headerKeys.logoAlt);

    expect(fr).toHaveProperty(footerName);
    expect(fr[footerName]).toHaveProperty(footerKeys.bio);
    expect(fr[footerName]).toHaveProperty(footerKeys.contactTitle);
    expect(fr[footerName]).toHaveProperty(footerKeys.location);
    expect(fr[footerName]).toHaveProperty(footerKeys.rights);
    expect(fr[footerName]).toHaveProperty(footerKeys.builtWith);
  });

  test('should ensure all french strings are valid and filled', () => {
    expect(typeof fr[homeName].title).toBe('string');
    expect(fr[homeName].title.length).toBeGreaterThan(0);

    expect(typeof fr[headerName].navHome).toBe('string');
    expect(fr[headerName].navHome.length).toBeGreaterThan(0);

    expect(typeof fr[footerName].bio).toBe('string');
    expect(fr[footerName].bio.length).toBeGreaterThan(0);
  });

  test('should lock exact official text values for french language', () => {
    expect(fr[homeName].title).toBe("Page d'accueil");
    expect(fr[skillsName].title).toBe('Page des compétences');
    expect(fr[projectsName].title).toBe('Page des projets');
    expect(fr[aboutName].title).toBe('Page à propos');
    expect(fr[notFoundName].title).toBe('404');
    expect(fr[notFoundName].message).toBe('Page non trouvée');

    expect(fr[headerName].navHome).toBe('Accueil');
    expect(fr[headerName].navSkills).toBe('Compétences');
    expect(fr[headerName].navProjects).toBe('Projets');
    expect(fr[headerName].navAbout).toBe('À propos');
    expect(fr[headerName].logoAlt).toBe('Logo du portfolio');

    expect(fr[footerName].bio).toBe(
      'Développeur passionné par la technologie avec de l’expérience en React.js et React Native. Axé sur la création de solutions élégantes et efficaces.',
    );
    expect(fr[footerName].contactTitle).toBe('Contact');
    expect(fr[footerName].location).toBe('São Paulo, Brésil');
    expect(fr[footerName].rights).toBe('Tous droits réservés.');
    expect(fr[footerName].builtWith).toBe('Propulsé par');
  });
});
