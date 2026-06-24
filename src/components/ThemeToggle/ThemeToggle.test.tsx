import {describe, test, expect, beforeEach} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import {ThemeProvider} from 'context/ThemeContext/ThemeContext';
import {ThemeToggle} from './ThemeToggle';

describe('ThemeToggle Component', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
  });

  const renderWithTheme = () => {
    return render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    );
  };

  describe('Render & Tailwind v4', () => {
    test('should render alternative text accessibility attributes based on light mode theme status', () => {
      renderWithTheme();

      const button = screen.getByRole('button', {name: /ativar modo escuro/i});
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('group', 'rounded-xl', 'dark:text-slate-300');
    });

    test('should alter alternative text accessibility attributes based on dark mode theme status', () => {
      localStorage.setItem('theme', 'dark');
      renderWithTheme();

      const button = screen.getByRole('button', {name: /ativar modo claro/i});
      expect(button).toBeInTheDocument();
    });
  });

  describe('Behavior', () => {
    test('should trigger the framework context callback handler upon click event dispatch', () => {
      renderWithTheme();

      const button = screen.getByRole('button', {name: /ativar modo escuro/i});

      fireEvent.click(button);
      expect(
        screen.getByRole('button', {name: /ativar modo claro/i}),
      ).toBeInTheDocument();
      expect(document.documentElement.classList.contains('dark')).toBe(true);

      fireEvent.click(button);
      expect(
        screen.getByRole('button', {name: /ativar modo escuro/i}),
      ).toBeInTheDocument();
      expect(document.documentElement.classList.contains('dark')).toBe(false);
    });
  });
});
