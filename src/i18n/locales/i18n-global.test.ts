import {describe, test, expect} from 'vitest';
import {namespaces} from '../i18n.constants';
import {pt} from './pt/translation';
import {en} from './en/translation';
import {fr} from './fr/translation';
import {es} from './es/translation';

describe('Global Internationalization Structure Checks', () => {
  const expectedKeys = Object.keys(namespaces.home.keys).sort();
  const homeNamespaceName = namespaces.home.name;

  test('should guarantee all translation files implement the exact keys defined in constants', () => {
    const dictionaries = [
      {name: 'pt-BR', data: pt},
      {name: 'en-US', data: en},
      {name: 'fr-FR', data: fr},
      {name: 'es-ES', data: es},
    ];

    dictionaries.forEach(dict => {
      expect(
        dict.data,
        `Dictionary ${dict.name} is missing the "${homeNamespaceName}" namespace`,
      ).toHaveProperty(homeNamespaceName);

      const actualKeys = Object.keys(dict.data[homeNamespaceName]).sort();

      expect(
        actualKeys,
        `Dictionary ${dict.name} keys do not match the constant blueprint`,
      ).toEqual(expectedKeys);
    });
  });
});
