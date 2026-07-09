import {describe, test, expect, beforeEach} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import {ThemeProvider} from './ThemeContext';
import {ThemeContext} from './ThemeContext.core';
import {useTheme} from './useTheme';
import {use} from 'react';

const DummyComponent = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <button type="button" onClick={toggleTheme} data-testid="theme-btn">
      {theme}
    </button>
  );
};

const BrokenComponent = () => {
  const context = use(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return <div>{context.theme}</div>;
};

const BrokenHookComponent = () => {
  useTheme();
  return null;
};

describe('ThemeContext System', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
  });

  describe('Render & Tailwind v4', () => {
    test('should initialize with light mode by default when localStorage is empty', () => {
      render(
        <ThemeProvider>
          <DummyComponent />
        </ThemeProvider>,
      );
      expect(screen.getByTestId('theme-btn')).toHaveTextContent('light');
      expect(document.documentElement.classList.contains('dark')).toBe(false);
    });

    test('should initialize with dark mode if persisted inside localStorage keys', () => {
      localStorage.setItem('theme', 'dark');
      render(
        <ThemeProvider>
          <DummyComponent />
        </ThemeProvider>,
      );
      expect(screen.getByTestId('theme-btn')).toHaveTextContent('dark');
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    test('should return false and initialize with light mode when localStorage contains light value', () => {
      localStorage.setItem('theme', 'light');
      render(
        <ThemeProvider>
          <DummyComponent />
        </ThemeProvider>,
      );
      expect(screen.getByTestId('theme-btn')).toHaveTextContent('light');
      expect(document.documentElement.classList.contains('dark')).toBe(false);
    });

    test('should initialize with dark mode when system prefers dark and no stored theme exists', () => {
      const originalMatchMedia = window.matchMedia;
      Object.defineProperty(window, 'matchMedia', {
        configurable: true,
        value: vi.fn(() => ({matches: true})),
      });
      localStorage.removeItem('theme');

      render(
        <ThemeProvider>
          <DummyComponent />
        </ThemeProvider>,
      );

      expect(screen.getByTestId('theme-btn')).toHaveTextContent('dark');
      expect(document.documentElement.classList.contains('dark')).toBe(true);

      Object.defineProperty(window, 'matchMedia', {
        configurable: true,
        value: originalMatchMedia,
      });
    });

    test('should throw when useTheme is called with an undefined ThemeContext provider value', () => {
      expect(() =>
        render(
          <ThemeContext.Provider value={undefined}>
            <BrokenHookComponent />
          </ThemeContext.Provider>,
        ),
      ).toThrowError('useTheme must be used within a ThemeProvider');
    });
  });

  describe('Behavior', () => {
    test('should switch values and manipulate DOM classList on toggle interaction click', () => {
      render(
        <ThemeProvider>
          <DummyComponent />
        </ThemeProvider>,
      );
      const btn = screen.getByTestId('theme-btn');

      fireEvent.click(btn);
      expect(btn).toHaveTextContent('dark');
      expect(document.documentElement.classList.contains('dark')).toBe(true);

      fireEvent.click(btn);
      expect(btn).toHaveTextContent('light');
      expect(document.documentElement.classList.contains('dark')).toBe(false);
    });

    test('should strictly throw an descriptive error when hook is invoked outside context provider boundary', () => {
      expect(() => render(<BrokenComponent />)).toThrowError(
        'useTheme must be used within a ThemeProvider',
      );
    });

    test('should throw when useTheme is called directly outside of a ThemeProvider', () => {
      expect(() => render(<BrokenHookComponent />)).toThrowError(
        'useTheme must be used within a ThemeProvider',
      );
    });
  });
});
