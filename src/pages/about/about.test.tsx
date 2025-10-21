import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {About} from './about';

describe('About', () => {
  describe('Renderização', () => {
    test('DEVE renderizar a pagina about', () => {
      const {getByTestId} = render(<About />);
      const result = getByTestId('about-page');
      expect(result).toBeDefined();
    });
    test('DEVE renderizar a pagina about', () => {
      const {getByText} = render(<About />);
      const result = getByText('About');
      expect(result).toBeDefined();
    });
  });
});
