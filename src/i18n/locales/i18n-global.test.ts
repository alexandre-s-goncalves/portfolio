import {describe, test, expect} from 'vitest';
import {pt} from './pt/translation';
import {en} from './en/translation';
import {fr} from './fr/translation';
import {es} from './es/translation';

const getLeafPaths = (value: unknown, prefix = ''): string[] => {
  if (typeof value !== 'object' || value === null) {
    return [prefix];
  }

  return Object.entries(value).flatMap(([key, child]) =>
    getLeafPaths(child, prefix ? `${prefix}.${key}` : key),
  );
};

const getValueAtPath = (value: unknown, path: string): unknown => {
  if (typeof value !== 'object' || value === null) {
    return undefined;
  }

  const record = value as Record<string, unknown>;
  const rootKey = Object.keys(record).find(
    key => path === key || path.startsWith(`${key}.`),
  );

  if (!rootKey) {
    return undefined;
  }

  const nestedPath = path.slice(rootKey.length).replace(/^\./, '');

  return nestedPath
    ? nestedPath.split('.').reduce<unknown>((current, key) => {
        if (typeof current !== 'object' || current === null) {
          return undefined;
        }

        return (current as Record<string, unknown>)[key];
      }, record[rootKey])
    : record[rootKey];
};

describe('Global Internationalization Structure Checks', () => {
  const expectedKeys = getLeafPaths(pt).sort();

  test('should guarantee every language matches the Portuguese base structure', () => {
    const dictionaries = [
      {name: 'pt-BR', data: pt},
      {name: 'en-US', data: en},
      {name: 'fr-FR', data: fr},
      {name: 'es-ES', data: es},
    ];

    dictionaries.forEach(dict => {
      const actualKeys = getLeafPaths(dict.data).sort();

      expect(
        actualKeys,
        `Dictionary ${dict.name} keys do not match the Portuguese base`,
      ).toEqual(expectedKeys);

      expectedKeys.forEach(path => {
        expect(
          getValueAtPath(dict.data, path),
          `Dictionary ${dict.name} is missing the key "${path}"`,
        ).toBeDefined();
      });
    });
  });
});
