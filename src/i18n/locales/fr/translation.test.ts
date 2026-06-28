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
  const languageSelectorName = namespaces.components.languageSelector;

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
  });

  test('should ensure all french strings are valid and filled', () => {
    expect(typeof fr[homeName].title).toBe('string');
    expect(fr[homeName].title.length).toBeGreaterThan(0);

    expect(typeof fr[headerName].navHome).toBe('string');
    expect(fr[headerName].navHome.length).toBeGreaterThan(0);
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

    expect(fr[languageSelectorName].portuguese).toBe('Portugais');
    expect(fr[languageSelectorName].altFlagBrazil).toBe('Drapeau du Brésil');
    expect(fr[languageSelectorName].english).toBe('Anglais');
    expect(fr[languageSelectorName].altFlagEUA).toBe('Drapeau des États-Unis');
    expect(fr[languageSelectorName].french).toBe('Français');
    expect(fr[languageSelectorName].altFragFrance).toBe('Drapeau de la France');
    expect(fr[languageSelectorName].spanish).toBe('Espagnol');
  });
});
