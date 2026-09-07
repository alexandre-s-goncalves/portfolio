import {describe, expect, test} from 'vitest';
import {computeFinalUrl} from './computeFinalUrl';

describe('computeFinalUrl', () => {
  test('combines a base url without a trailing slash and a relative path', () => {
    expect(computeFinalUrl('pdf/resume.pdf', '/portfolio')).toBe(
      '/portfolio/pdf/resume.pdf',
    );
  });

  test('does not duplicate a trailing slash from the base url', () => {
    expect(computeFinalUrl('pdf/resume.pdf', '/portfolio/')).toBe(
      '/portfolio/pdf/resume.pdf',
    );
  });

  test('removes a leading slash from the pdf path', () => {
    expect(computeFinalUrl('/pdf/resume.pdf', '/portfolio')).toBe(
      '/portfolio/pdf/resume.pdf',
    );
  });

  test('returns a root-relative path when the base url is empty', () => {
    expect(computeFinalUrl('/pdf/resume.pdf', '')).toBe('/pdf/resume.pdf');
  });

  test('purges branch specific qas suffixes from base urls to keep links active', () => {
    expect(computeFinalUrl('/pdf/resume.pdf', '/portfolio/qas/')).toBe(
      '/portfolio/pdf/resume.pdf',
    );
  });

  test('purges branch specific main suffixes from base urls securely', () => {
    expect(computeFinalUrl('/pdf/resume.pdf', '/portfolio/main/')).toBe(
      '/portfolio/pdf/resume.pdf',
    );
  });
});
