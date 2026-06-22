import {describe, test, expect} from 'vitest';
import {namespaces} from '../../i18n.constants';
import {pt} from './translation';

describe('Portuguese Translation Content Assertions', () => {
  const homeName = namespaces.home.name;
  const keys = namespaces.home.keys;
  const languageSelectorName = namespaces.components.languageSelector;

  test('should verify that home namespace contains all required keys', () => {
    expect(pt).toHaveProperty(homeName);
    expect(pt[homeName]).toHaveProperty(keys.welcome);
    expect(pt[homeName]).toHaveProperty(keys.subtitle);
  });

  test('should ensure all portuguese strings are valid and filled', () => {
    expect(typeof pt[homeName].welcome).toBe('string');
    expect(pt[homeName].welcome.length).toBeGreaterThan(0);
    expect(typeof pt[homeName].subtitle).toBe('string');
    expect(pt[homeName].subtitle.length).toBeGreaterThan(0);
  });

  test('should lock exact official text values for portuguese language', () => {
    expect(pt[homeName].welcome).toBe('Bem-vindo ao meu Portfólio');
    expect(pt[homeName].subtitle).toBe('Desenvolvedor de Software');
    expect(pt[languageSelectorName].portuguese).toBe('Português');
    expect(pt[languageSelectorName].altFlagBrazil).toBe('Bandeira do Brasil');
    expect(pt[languageSelectorName].english).toBe('Inglês');
    expect(pt[languageSelectorName].altFlagEUA).toBe('Bandeira dos EUA');
    expect(pt[languageSelectorName].french).toBe('Francês');
    expect(pt[languageSelectorName].altFragFrance).toBe('Bandeira da França');
    expect(pt[languageSelectorName].spanish).toBe('Espanhol');
  });
});
