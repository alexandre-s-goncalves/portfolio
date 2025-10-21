import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {NotFound} from './notFound';

describe('NotFound', () => {
  describe('Renderização', () => {
    test('DEVE renderizar a pagina NotFound', () => {
      const {getByTestId} = render(<NotFound />);
      const result = getByTestId('notfound-page');
      expect(result).toBeDefined();
    });
    test('DEVE renderizar a pagina NotFound', () => {
      const {getByText} = render(<NotFound />);
      const result = getByText('NotFound');
      expect(result).toBeDefined();
    });
  });
});
