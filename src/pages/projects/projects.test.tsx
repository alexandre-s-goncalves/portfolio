import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Projects} from './projects';

describe('Projects', () => {
  describe('Renderização', () => {
    test('DEVE renderizar a pagina projects', () => {
      const {getByTestId} = render(<Projects />);
      const result = getByTestId('projects-page');
      expect(result).toBeDefined();
    });
    test('DEVE renderizar a pagina projects', () => {
      const {getByText} = render(<Projects />);
      const result = getByText('Projects');
      expect(result).toBeDefined();
    });
  });
});
