import fs from 'fs';
import path from 'path';

function escapeForRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function loadTsConfig(tsconfigPath = path.resolve(process.cwd(), 'tsconfig.json')): any {
  const raw = fs.readFileSync(tsconfigPath, 'utf8');
  return JSON.parse(raw);
}

export function makeJestMapper(paths: Record<string, string[]>, baseUrl = '.') {
  const mapper: Record<string, string> = {};
  for (const [alias, targets] of Object.entries(paths || {})) {
    if (!targets || targets.length === 0) continue;
    const aliasKey = String(alias).replace(/\/\*$/, '');
    const target0 = String(targets[0]).replace(/\/\*$/, '');
    const regex = `^${escapeForRegex(aliasKey)}/(.*)$`;
    mapper[regex] =
      `<rootDir>/${path.posix.join(baseUrl.replace(/^\.\//, ''), target0)}/$1`.replace(
        /\/\/{2,}/g,
        '/',
      );
    mapper[`^${escapeForRegex(aliasKey)}$`] =
      `<rootDir>/${path.posix.join(baseUrl.replace(/^\.\//, ''), target0)}`.replace(
        /\/\/{2,}/g,
        '/',
      );
  }
  return mapper;
}

export function makeViteAliases(paths: Record<string, string[]>, baseUrl = '.') {
  return Object.entries(paths || {})
    .map(([alias, targets]) => {
      if (!targets || targets.length === 0) return null;
      const find = String(alias).replace(/\/\*$/, '');
      const target0 = String(targets[0]).replace(/\/\*$/, '');
      const replacement = path.resolve(process.cwd(), baseUrl, target0);
      return {find, replacement};
    })
    .filter(Boolean) as {find: string; replacement: string}[];
}

export default {loadTsConfig, makeJestMapper, makeViteAliases};
