import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('should render without crashing', () => {
    render(<App />);
    const heading = screen.getByRole('heading', {name: /Tailwind v4 Configurado!/i});
    expect(heading).toBeDefined();
  });
});
