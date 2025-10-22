import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {NotFound} from './notFound';

describe('NotFound', () => {
  describe('Rendering', () => {
    test('should render the NotFound page (by test id)', () => {
      const {getByTestId} = render(<NotFound />);
      const result = getByTestId('notfound-page');
      expect(result).toBeDefined();
    });
    test('should render the NotFound page (by text)', () => {
      const {getByText} = render(<NotFound />);
      const result = getByText('NotFound');
      expect(result).toBeDefined();
    });
  });
});
