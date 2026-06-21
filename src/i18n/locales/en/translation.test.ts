import {describe, test, expect} from 'vitest';
import {namespaces} from '../../i18n.constants';
import {en} from './translation';

describe('English Translation Content Assertions', () => {
  const homeName = namespaces.home.name;
  const keys = namespaces.home.keys;

  test('should verify that home namespace contains all required keys', () => {
    expect(en).toHaveProperty(homeName);
    expect(en[homeName]).toHaveProperty(keys.welcome);
    expect(en[homeName]).toHaveProperty(keys.subtitle);
  });

  test('should ensure all english strings are valid and filled', () => {
    expect(typeof en[homeName].welcome).toBe('string');
    expect(en[homeName].welcome.length).toBeGreaterThan(0);

    expect(typeof en[homeName].subtitle).toBe('string');
    expect(en[homeName].subtitle.length).toBeGreaterThan(0);
  });

  test('should lock exact official text values for english language', () => {
    expect(en[homeName].welcome).toBe('Welcome to my Portfolio');
    expect(en[homeName].subtitle).toBe('Software Developer');
  });
});
