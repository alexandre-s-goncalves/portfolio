import {describe, test, expect} from 'vitest';
import {namespaces} from '../../i18n.constants';
import {es} from './translation';

describe('Spanish Translation Content Assertions', () => {
  const homeName = namespaces.home.name;
  const homeKeys = namespaces.home.keys;
  const headerName = namespaces.header.name;
  const headerKeys = namespaces.header.keys;
  const languageSelectorName = namespaces.components.languageSelector;

  test('should verify that namespaces contain all required keys', () => {
    expect(es).toHaveProperty(homeName);
    expect(es[homeName]).toHaveProperty(homeKeys.welcome);
    expect(es[homeName]).toHaveProperty(homeKeys.subtitle);

    expect(es).toHaveProperty(headerName);
    expect(es[headerName]).toHaveProperty(headerKeys.navHome);
    expect(es[headerName]).toHaveProperty(headerKeys.navSkills);
    expect(es[headerName]).toHaveProperty(headerKeys.navProjects);
    expect(es[headerName]).toHaveProperty(headerKeys.navAbout);
    expect(es[headerName]).toHaveProperty(headerKeys.logoAlt);
  });

  test('should ensure all spanish strings are valid and filled', () => {
    expect(typeof es[homeName].welcome).toBe('string');
    expect(es[homeName].welcome.length).toBeGreaterThan(0);
    expect(typeof es[homeName].subtitle).toBe('string');
    expect(es[homeName].subtitle.length).toBeGreaterThan(0);

    expect(typeof es[headerName].navHome).toBe('string');
    expect(es[headerName].navHome.length).toBeGreaterThan(0);
  });

  test('should lock exact official text values for spanish language', () => {
    expect(es[homeName].welcome).toBe('Bienvenido a mi Portafolio');
    expect(es[homeName].subtitle).toBe('Desarrollador de Software');

    expect(es[headerName].navHome).toBe('Inicio');
    expect(es[headerName].navSkills).toBe('Habilidades');
    expect(es[headerName].navProjects).toBe('Proyectos');
    expect(es[headerName].navAbout).toBe('Sobre mí');
    expect(es[headerName].logoAlt).toBe('Logotipo del portafolio');

    expect(es[languageSelectorName].portuguese).toBe('Portugués');
    expect(es[languageSelectorName].altFlagBrazil).toBe('Bandera de Brasil');
    expect(es[languageSelectorName].english).toBe('Inglés');
    expect(es[languageSelectorName].altFlagEUA).toBe('Bandera de EE. UU.');
    expect(es[languageSelectorName].french).toBe('Francés');
    expect(es[languageSelectorName].altFragFrance).toBe('Bandera de Francia');
    expect(es[languageSelectorName].spanish).toBe('Español');
  });
});
