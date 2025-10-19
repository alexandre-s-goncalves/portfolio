import path from 'path';
import {makeJestMapper, makeViteAliases, loadTsConfig} from './tsconfig-aliases';

describe('tsconfig-aliases', () => {
  test('makeJestMapper produces correct mapping for wildcard and exact', () => {
    const paths = {
      'resources/*': ['src/resources/*'],
      utils: ['src/utils'],
    } as Record<string, string[]>;

    const mapper = makeJestMapper(paths, '.');

    expect(mapper['^resources/(.*)$']).toBe('<rootDir>/src/resources/$1');
    expect(mapper['^resources$']).toBe('<rootDir>/src/resources');
    expect(mapper['^utils/(.*)$']).toBe('<rootDir>/src/utils/$1');
    expect(mapper['^utils$']).toBe('<rootDir>/src/utils');
  });

  test('makeJestMapper handles undefined paths and undefined/empty targets', () => {
    expect(Object.keys(makeJestMapper(undefined as any)).length).toBe(0);

    const mapperUndef = makeJestMapper({foo: undefined as any}, '.');
    expect(Object.keys(mapperUndef).length).toBe(0);

    const mapperEmpty = makeJestMapper({'bar/*': []}, '.');
    expect(Object.keys(mapperEmpty).length).toBe(0);
  });

  test('makeViteAliases handles undefined paths and undefined/empty targets', () => {
    expect(makeViteAliases(undefined as any).length).toBe(0);

    const vaUndef = makeViteAliases({foo: undefined as unknown as string[]}, '.');
    expect(vaUndef.length).toBe(0);

    const vaEmpty = makeViteAliases({'bar/*': []}, '.');
    expect(vaEmpty.length).toBe(0);
  });

  test('makeViteAliases returns correct alias objects', () => {
    const paths = {
      'resources/*': ['src/resources/*'],
      utils: ['src/utils'],
    } as Record<string, string[]>;

    const aliases = makeViteAliases(paths, '.');
    const byFind = Object.fromEntries(aliases.map(a => [a.find, a.replacement]));

    expect(byFind['resources']).toBe(path.resolve(process.cwd(), 'src/resources'));
    expect(byFind['utils']).toBe(path.resolve(process.cwd(), 'src/utils'));
  });

  test('loadTsConfig reads and parses tsconfig.json', () => {
    const tsconfig = loadTsConfig(path.resolve(process.cwd(), 'tsconfig.json'));
    expect(tsconfig).toHaveProperty('compilerOptions');
  });

  test('handles empty targets and multiple targets gracefully', () => {
    const paths = {
      'empty/*': [],
      'multi/*': ['src/a/*', 'src/b/*'],
      'plain/*': ['src/plain/*'],
    } as Record<string, string[]>;

    const mapper = makeJestMapper(paths, '.');
    expect(mapper['^multi/(.*)$']).toBe('<rootDir>/src/a/$1');
    expect(mapper['^plain/(.*)$']).toBe('<rootDir>/src/plain/$1');
    expect(Object.keys(mapper).some(k => k.includes('empty'))).toBe(false);
  });

  test("handles baseUrl starting with './' and exact alias without wildcard", () => {
    const paths = {
      alias: ['./src/some'],
      'alias/*': ['./src/some/*'],
    } as Record<string, string[]>;

    const mapper = makeJestMapper(paths, './');
    expect(mapper['^alias/(.*)$']).toBe('<rootDir>/src/some/$1');
    expect(mapper['^alias$']).toBe('<rootDir>/src/some');
  });

  test('loadTsConfig with default parameter reads tsconfig.json', () => {
    const tsconfig = loadTsConfig();
    expect(tsconfig).toHaveProperty('compilerOptions');
  });

  test('makeJestMapper escapes regex metacharacters in alias', () => {
    const paths = {
      'a.b*': ['src/ab/*'],
      'a(b)': ['src/ab2/*'],
    } as Record<string, string[]>;

    const mapper = makeJestMapper(paths, '.');
    expect(Object.keys(mapper).some(k => k.startsWith('^a\\.b'))).toBe(true);
    expect(Object.keys(mapper).some(k => k.includes('\\(b\\)') || k.includes('a\\(b\\)'))).toBe(
      true,
    );
  });

  test('makeViteAliases skips entries with empty or undefined targets', () => {
    const paths = {
      'ok/*': ['src/ok/*'],
      'empty/*': [],
      undef: undefined as unknown as string[],
    } as Record<string, string[]>;

    const aliases = makeViteAliases(paths, '.');
    const finds = aliases.map(a => a.find);
    expect(finds).toContain('ok');
    expect(finds).not.toContain('empty');
    expect(finds).not.toContain('undef');
  });

  test('normalize duplicated slashes in jest mapper and vite aliases', () => {
    const paths = {
      'dup/*': ['//src//dup/*'],
      dup2: ['//src//dup2'],
    } as Record<string, string[]>;

    const jm = makeJestMapper(paths, './');
    expect(jm['^dup/(.*)$'].replace(/\/{2,}/g, '/')).toBe('<rootDir>/src/dup/$1');
    expect(jm['^dup2$'].replace(/\/{2,}/g, '/')).toBe('<rootDir>/src/dup2');

    const va = makeViteAliases(paths, './');
    const byFind = Object.fromEntries(va.map(a => [a.find, a.replacement]));
    const expectedDup = path.resolve(process.cwd(), './', '//src//dup'.replace(/\/\*$/, ''));
    const expectedDup2 = path.resolve(process.cwd(), './', '//src//dup2'.replace(/\/\*$/, ''));
    expect(byFind['dup']).toBe(expectedDup);
    expect(byFind['dup2']).toBe(expectedDup2);
  });

  test('require default export and call functions (coverage helper)', () => {
    const mod = require('./tsconfig-aliases').default;
    expect(mod).toHaveProperty('makeJestMapper');
    expect(mod).toHaveProperty('makeViteAliases');

    const jm = mod.makeJestMapper({'z/*': ['src/z/*']}, '.');
    const va = mod.makeViteAliases({'z/*': ['src/z/*']}, '.');
    expect(jm['^z/(.*)$']).toBe('<rootDir>/src/z/$1');
    expect(va.some((a: any) => a.find === 'z')).toBe(true);
  });
});
