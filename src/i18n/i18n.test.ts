import {describe, test, expect, beforeEach} from 'vitest';
import i18n, {resources} from './i18n';
import {languages} from './i18n.constants';

describe('i18n Core Configuration', () => {
  beforeEach(() => {
    document.documentElement.lang = '';
  });

  test('should initialize i18next instance successfully', () => {
    expect(i18n.isInitialized).toBe(true);
  });

  test('should configure correct fallback language to english', () => {
    expect(i18n.options.fallbackLng).toEqual(['en']);
  });

  test('should embed all 4 required language resources into the engine', () => {
    expect(resources).toHaveProperty(languages.pt);
    expect(resources).toHaveProperty(languages.en);
    expect(resources).toHaveProperty(languages.fr);
    expect(resources).toHaveProperty(languages.es);
  });

  test('should disable interpolation html escaping since react prevents XSS by default', () => {
    expect(i18n.options.interpolation?.escapeValue).toBe(false);
  });

  test('should successfully register and execute the custom postProcessor module', () => {
    const titleWithPostProcessor = i18n.t('home:title', {
      postProcess: 'customAttribute',
    });

    expect(titleWithPostProcessor).toBe('Home Page');
  });

  test('should trigger languageChanged event and dynamically update document lang attribute', async () => {
    document.documentElement.lang = 'en';

    await i18n.changeLanguage('pt');
    expect(document.documentElement.lang).toBe('pt');

    await i18n.changeLanguage('fr');
    expect(document.documentElement.lang).toBe('fr');

    await i18n.changeLanguage('es');
    expect(document.documentElement.lang).toBe('es');
  });

  test('should retain functional translation execution for base language keys', async () => {
    await i18n.changeLanguage('pt');

    const titleText = i18n.t('home:title');
    expect(titleText).toBe('Página Início');
  });
});
