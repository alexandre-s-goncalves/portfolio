import {describe, test, expect} from 'vitest';
import {getMenuItems} from './LanguageSelector.helpers';

describe('LanguageSelector helper', () => {
  test('should return no menu items for a null container', () => {
    expect(getMenuItems(null)).toEqual([]);
  });
});
