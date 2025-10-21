import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Skills} from './skills';

describe('Skills', () => {
  describe('Renderização', () => {
    test('DEVE renderizar a pagina skills', () => {
      const {getByTestId} = render(<Skills />);
      const result = getByTestId('skills-page');
      expect(result).toBeDefined();
    });
    test('DEVE renderizar a pagina skills', () => {
      const {getByText} = render(<Skills />);
      const result = getByText('Skills');
      expect(result).toBeDefined();
    });
  });
});
