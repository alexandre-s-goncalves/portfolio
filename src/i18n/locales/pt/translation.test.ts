import {describe, test, expect} from 'vitest';
import {namespaces} from '../../i18n.constants';
import {pt} from './translation';

describe('Portuguese Translation Content Assertions', () => {
  const homeName = namespaces.home.name;
  const homeKeys = namespaces.home.keys;
  const headerName = namespaces.header.name;
  const headerKeys = namespaces.header.keys;
  const languageSelectorName = namespaces.components.languageSelector;

  test('should verify that namespaces contain all required keys', () => {
    expect(pt).toHaveProperty(homeName);
    expect(pt[homeName]).toHaveProperty(homeKeys.welcome);
    expect(pt[homeName]).toHaveProperty(homeKeys.subtitle);

    expect(pt).toHaveProperty(headerName);
    expect(pt[headerName]).toHaveProperty(headerKeys.navHome);
    expect(pt[headerName]).toHaveProperty(headerKeys.navSkills);
    expect(pt[headerName]).toHaveProperty(headerKeys.navProjects);
    expect(pt[headerName]).toHaveProperty(headerKeys.navAbout);
    expect(pt[headerName]).toHaveProperty(headerKeys.logoAlt);
  });

  test('should ensure all portuguese strings are valid and filled', () => {
    expect(typeof pt[homeName].welcome).toBe('string');
    expect(pt[homeName].welcome.length).toBeGreaterThan(0);
    expect(typeof pt[homeName].subtitle).toBe('string');
    expect(pt[homeName].subtitle.length).toBeGreaterThan(0);

    expect(typeof pt[headerName].navHome).toBe('string');
    expect(pt[headerName].navHome.length).toBeGreaterThan(0);
  });

  test('should lock exact official text values for portuguese language', () => {
    expect(pt[homeName].welcome).toBe('Bem-vindo ao meu Portfólio');
    expect(pt[homeName].subtitle).toBe('Desenvolvedor de Software');

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
