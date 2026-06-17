import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('should render without crashing', () => {
    render(<App />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });
});
