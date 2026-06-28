import {describe, test, expect} from 'vitest';
import {namespaces} from '../../i18n.constants';
import {pt} from './translation';

describe('Portuguese Translation Content Assertions', () => {
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
    expect(pt).toHaveProperty(homeName);
    expect(pt[homeName]).toHaveProperty(homeKeys.title);

    expect(pt).toHaveProperty(skillsName);
    expect(pt[skillsName]).toHaveProperty(skillsKeys.title);

    expect(pt).toHaveProperty(projectsName);
    expect(pt[projectsName]).toHaveProperty(projectsKeys.title);

    expect(pt).toHaveProperty(aboutName);
    expect(pt[aboutName]).toHaveProperty(aboutKeys.title);

    expect(pt).toHaveProperty(notFoundName);
    expect(pt[notFoundName]).toHaveProperty(notFoundKeys.title);
    expect(pt[notFoundName]).toHaveProperty(notFoundKeys.message);

    expect(pt).toHaveProperty(headerName);
    expect(pt[headerName]).toHaveProperty(headerKeys.navHome);
    expect(pt[headerName]).toHaveProperty(headerKeys.navSkills);
    expect(pt[headerName]).toHaveProperty(headerKeys.navProjects);
    expect(pt[headerName]).toHaveProperty(headerKeys.navAbout);
    expect(pt[headerName]).toHaveProperty(headerKeys.logoAlt);
  });

  test('should ensure all portuguese strings are valid and filled', () => {
    expect(typeof pt[homeName].title).toBe('string');
    expect(pt[homeName].title.length).toBeGreaterThan(0);

    expect(typeof pt[headerName].navHome).toBe('string');
    expect(pt[headerName].navHome.length).toBeGreaterThan(0);
  });

  test('should lock exact official text values for portuguese language', () => {
    expect(pt[homeName].title).toBe('Página Início');
    expect(pt[skillsName].title).toBe('Página Habilidades');
    expect(pt[projectsName].title).toBe('Página Projetos');
    expect(pt[aboutName].title).toBe('Página Sobre');
    expect(pt[notFoundName].title).toBe('404');
    expect(pt[notFoundName].message).toBe('Página não encontrada');

    expect(pt[headerName].navHome).toBe('Início');
    expect(pt[headerName].navSkills).toBe('Habilidades');
    expect(pt[headerName].navProjects).toBe('Projetos');
    expect(pt[headerName].navAbout).toBe('Sobre');
    expect(pt[headerName].logoAlt).toBe('Logotipo do portfólio');

    expect(pt[languageSelectorName].portuguese).toBe('Português');
    expect(pt[languageSelectorName].altFlagBrazil).toBe('Bandeira do Brasil');
    expect(pt[languageSelectorName].english).toBe('Inglês');
    expect(pt[languageSelectorName].altFlagEUA).toBe('Bandeira dos EUA');
    expect(pt[languageSelectorName].french).toBe('Francês');
    expect(pt[languageSelectorName].altFragFrance).toBe('Bandeira da França');
    expect(pt[languageSelectorName].spanish).toBe('Espanhol');
  });
});
