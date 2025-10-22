import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Skills} from './skills';

describe('Skills', () => {
  describe('Rendering', () => {
    test('should render the skills page (by test id)', () => {
      const {getByTestId} = render(<Skills />);
      const result = getByTestId('skills-page');
      expect(result).toBeDefined();
    });
    test('should render the skills page (by text)', () => {
      const {getByText} = render(<Skills />);
      const result = getByText('Skills');
      expect(result).toBeDefined();
    });
  });
});
