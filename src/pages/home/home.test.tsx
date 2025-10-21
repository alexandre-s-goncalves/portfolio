import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Home} from './home';

describe('Home', () => {
  describe('Renderização', () => {
    test('DEVE renderizar a pagina home', () => {
      const {getByTestId} = render(<Home />);
      const result = getByTestId('home-page');
      expect(result).toBeDefined();
    });
    test('DEVE renderizar a pagina home', () => {
      const {getByText} = render(<Home />);
      const result = getByText('Meu Portfolio');
      expect(result).toBeDefined();
    });
  });
});
