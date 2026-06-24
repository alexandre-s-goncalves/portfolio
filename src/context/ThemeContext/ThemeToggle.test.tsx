import {describe, test, expect, vi, beforeEach} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import {ThemeProvider, useTheme} from './index';

const DummyComponent = () => {
  const {themeDark, toggleTheme} = useTheme();
  return (
    <div>
      <span data-testid="theme-status">{themeDark ? 'dark' : 'light'}</span>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

const BrokenComponent = () => {
  useTheme();
  return null;
};

describe('ThemeContext System', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
    vi.clearAllMocks();
  });

  describe('Render & Tailwind v4', () => {
    test('should initialize with light mode by default when localStorage is empty', () => {
      render(
        <ThemeProvider>
          <DummyComponent />
        </ThemeProvider>,
      );

      expect(screen.getByTestId('theme-status').textContent).toBe('light');
      expect(document.documentElement.classList.contains('dark')).toBe(false);
      expect(localStorage.getItem('theme')).toBe('light');
    });

    test('should initialize with dark mode if persisted inside localStorage keys', () => {
      localStorage.setItem('theme', 'dark');

      render(
        <ThemeProvider>
          <DummyComponent />
        </ThemeProvider>,
      );

      expect(screen.getByTestId('theme-status').textContent).toBe('dark');
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    test('should return false and initialize with light mode when localStorage contains light value', () => {
      localStorage.setItem('theme', 'light');

      render(
        <ThemeProvider>
          <DummyComponent />
        </ThemeProvider>,
      );

      expect(screen.getByTestId('theme-status').textContent).toBe('light');
      expect(document.documentElement.classList.contains('dark')).toBe(false);
    });
  });

  describe('Behavior', () => {
    test('should switch values and manipulate DOM classList on toggle interaction click', () => {
      render(
        <ThemeProvider>
          <DummyComponent />
        </ThemeProvider>,
      );

      const button = screen.getByRole('button');

      fireEvent.click(button);
      expect(screen.getByTestId('theme-status').textContent).toBe('dark');
      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(localStorage.getItem('theme')).toBe('dark');

      fireEvent.click(button);
      expect(screen.getByTestId('theme-status').textContent).toBe('light');
      expect(document.documentElement.classList.contains('dark')).toBe(false);
      expect(localStorage.getItem('theme')).toBe('light');
    });

    test('should strictly throw an descriptive error when hook is invoked outside context provider boundary', () => {
      vi.spyOn(console, 'error').mockImplementation(() => {});

      expect(() => render(<BrokenComponent />)).toThrowError(
        'useTheme must be used within a ThemeProvider',
      );
    });
  });
});
