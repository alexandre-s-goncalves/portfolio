import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {About} from './about';

describe('About', () => {
  describe('Rendering', () => {
    test('should render the about page (by test id)', () => {
      const {getByTestId} = render(<About />);
      const result = getByTestId('about-page');
      expect(result).toBeDefined();
    });
    test('should render the about page (by text)', () => {
      const {getByText} = render(<About />);
      const result = getByText('About');
      expect(result).toBeDefined();
    });
  });
});
