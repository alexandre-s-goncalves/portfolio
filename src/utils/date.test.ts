import {describe, test, expect} from 'vitest';
import {calculateYearsDifference} from './date';

describe('Date Utility - calculateYearsDifference', () => {
  test.each`
    startDate       | endDate         | expectedYears
    ${'2021-08-01'} | ${'2026-10-15'} | ${5}
    ${'2021-08-01'} | ${'2026-05-20'} | ${4}
    ${'2021-08-15'} | ${'2026-08-10'} | ${4}
    ${'2021-08-15'} | ${'2026-08-15'} | ${5}
    ${'2021-08-15'} | ${'2026-08-20'} | ${5}
    ${'2021-05-10'} | ${'2026-08-10'} | ${5}
    ${'2021-08-01'} | ${'2026-08-01'} | ${5}
  `(
    'when start is $startDate and end is $endDate, expected difference is $expectedYears years',
    ({startDate, endDate, expectedYears}) => {
      expect(
        calculateYearsDifference(new Date(startDate), new Date(endDate)),
      ).toBe(expectedYears);
    },
  );

  test('should support string dates for both inputs', () => {
    expect(calculateYearsDifference('2021-08-01', '2026-08-01')).toBe(5);
  });

  test('should fallback to current date when second argument is omitted', () => {
    const start = new Date();
    start.setFullYear(start.getFullYear() - 3);

    expect(calculateYearsDifference(start)).toBe(3);
  });
});
