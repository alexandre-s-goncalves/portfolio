import {describe, test, expect} from 'vitest';
import {namespaces} from '../../i18n.constants';
import {en} from './translation';

describe('English Translation Content Assertions', () => {
  const homeName = namespaces.home.name;
  const homeKeys = namespaces.home.keys;
  const headerName = namespaces.header.name;
  const headerKeys = namespaces.header.keys;
  const languageSelectorName = namespaces.components.languageSelector;

  test('should verify that namespaces contain all required keys', () => {
    expect(en).toHaveProperty(homeName);
    expect(en[homeName]).toHaveProperty(homeKeys.welcome);
    expect(en[homeName]).toHaveProperty(homeKeys.subtitle);

    expect(en).toHaveProperty(headerName);
    expect(en[headerName]).toHaveProperty(headerKeys.navHome);
    expect(en[headerName]).toHaveProperty(headerKeys.navSkills);
    expect(en[headerName]).toHaveProperty(headerKeys.navProjects);
    expect(en[headerName]).toHaveProperty(headerKeys.navAbout);
    expect(en[headerName]).toHaveProperty(headerKeys.logoAlt);
  });

  test('should ensure all english strings are valid and filled', () => {
    expect(typeof en[homeName].welcome).toBe('string');
    expect(en[homeName].welcome.length).toBeGreaterThan(0);
    expect(typeof en[homeName].subtitle).toBe('string');
    expect(en[homeName].subtitle.length).toBeGreaterThan(0);

    expect(typeof en[headerName].navHome).toBe('string');
    expect(en[headerName].navHome.length).toBeGreaterThan(0);
  });

  test('should lock exact official text values for english language', () => {
    expect(en[homeName].welcome).toBe('Welcome to my Portfolio');
    expect(en[homeName].subtitle).toBe('Software Developer');

    expect(en[headerName].navHome).toBe('Home');
    expect(en[headerName].navSkills).toBe('Skills');
    expect(en[headerName].navProjects).toBe('Projects');
    expect(en[headerName].navAbout).toBe('About');
    expect(en[headerName].logoAlt).toBe('Portfolio logo');

    expect(en[languageSelectorName].portuguese).toBe('Portuguese');
    expect(en[languageSelectorName].altFlagBrazil).toBe('Flag of Brazil');
    expect(en[languageSelectorName].english).toBe('English');
    expect(en[languageSelectorName].altFlagEUA).toBe('Flag of the USA');
    expect(en[languageSelectorName].french).toBe('French');
    expect(en[languageSelectorName].altFragFrance).toBe('Flag of France');
    expect(en[languageSelectorName].spanish).toBe('Spanish');
  });
});
