import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Home} from './home';

describe('Home', () => {
  describe('Rendering', () => {
    test('should render the home page (by test id)', () => {
      const {getByTestId} = render(<Home />);
      const result = getByTestId('home-page');
      expect(result).toBeDefined();
    });
    test('should render the home page (by text)', () => {
      const {getByText} = render(<Home />);
      const result = getByText('Meu Portfolio');
      expect(result).toBeDefined();
    });
  });
});
