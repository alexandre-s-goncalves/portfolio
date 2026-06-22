import {describe, test, expect} from 'vitest';
import {namespaces} from '../../i18n.constants';
import {es} from './translation';

describe('Spanish Translation Content Assertions', () => {
  const homeName = namespaces.home.name;
  const keys = namespaces.home.keys;
  const languageSelectorName = namespaces.components.languageSelector;

  test('should verify that home namespace contains all required keys', () => {
    expect(es).toHaveProperty(homeName);
    expect(es[homeName]).toHaveProperty(keys.welcome);
    expect(es[homeName]).toHaveProperty(keys.subtitle);
  });

  test('should ensure all spanish strings are valid and filled', () => {
    expect(typeof es[homeName].welcome).toBe('string');
    expect(es[homeName].welcome.length).toBeGreaterThan(0);
    expect(typeof es[homeName].subtitle).toBe('string');
    expect(es[homeName].subtitle.length).toBeGreaterThan(0);
  });

  test('should lock exact official text values for spanish language', () => {
    expect(es[homeName].welcome).toBe('Bienvenido a mi Portafolio');
    expect(es[homeName].subtitle).toBe('Desarrollador de Software');
    expect(es[languageSelectorName].portuguese).toBe('Portugués');
    expect(es[languageSelectorName].altFlagBrazil).toBe('Bandera de Brasil');
    expect(es[languageSelectorName].english).toBe('Inglés');
    expect(es[languageSelectorName].altFlagEUA).toBe('Bandera de EE. UU.');
    expect(es[languageSelectorName].french).toBe('Francés');
    expect(es[languageSelectorName].altFragFrance).toBe('Bandera de Francia');
    expect(es[languageSelectorName].spanish).toBe('Español');
  });
});
