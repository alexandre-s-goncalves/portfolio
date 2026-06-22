import {describe, test, expect} from 'vitest';
import {namespaces} from '../../i18n.constants';
import {fr} from './translation';

describe('French Translation Content Assertions', () => {
  const homeName = namespaces.home.name;
  const keys = namespaces.home.keys;
  const languageSelectorName = namespaces.components.languageSelector;

  test('should verify that home namespace contains all required keys', () => {
    expect(fr).toHaveProperty(homeName);
    expect(fr[homeName]).toHaveProperty(keys.welcome);
    expect(fr[homeName]).toHaveProperty(keys.subtitle);
  });

  test('should ensure all french strings are valid and filled', () => {
    expect(typeof fr[homeName].welcome).toBe('string');
    expect(fr[homeName].welcome.length).toBeGreaterThan(0);
    expect(typeof fr[homeName].subtitle).toBe('string');
    expect(fr[homeName].subtitle.length).toBeGreaterThan(0);
  });

  test('should lock exact official text values for french language', () => {
    expect(fr[homeName].welcome).toBe('Bienvenue sur mon Portfolio');
    expect(fr[homeName].subtitle).toBe('Développeur de Logiciel');
    expect(fr[languageSelectorName].portuguese).toBe('Portugais');
    expect(fr[languageSelectorName].altFlagBrazil).toBe('Drapeau du Brésil');
    expect(fr[languageSelectorName].english).toBe('Anglais');
    expect(fr[languageSelectorName].altFlagEUA).toBe('Drapeau des États-Unis');
    expect(fr[languageSelectorName].french).toBe('Français');
    expect(fr[languageSelectorName].altFragFrance).toBe('Drapeau de la France');
    expect(fr[languageSelectorName].spanish).toBe('Espagnol');
  });
});
