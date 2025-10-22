import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Projects} from './projects';

describe('Projects', () => {
  describe('Rendering', () => {
    test('should render the projects page (by test id)', () => {
      const {getByTestId} = render(<Projects />);
      const result = getByTestId('projects-page');
      expect(result).toBeDefined();
    });
    test('should render the projects page (by text)', () => {
      const {getByText} = render(<Projects />);
      const result = getByText('Projects');
      expect(result).toBeDefined();
    });
  });
});
