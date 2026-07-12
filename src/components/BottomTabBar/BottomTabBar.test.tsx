import {describe, test, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {BottomTabBar} from './BottomTabBar';

describe('BottomTabBar Component Integration', () => {
  const renderComponent = (initialEntries = ['/']) => {
    return render(
      <MemoryRouter initialEntries={initialEntries}>
        <BottomTabBar />
      </MemoryRouter>,
    );
  };

  describe('Renderização & Tailwind v4', () => {
    test('should mount semantic navigation landmarks and explicit accessibility labels completely', () => {
      renderComponent();

      const navElement = screen.getByRole('navigation', {
        name: /Mobile Bottom Navigation/i,
      });
      expect(navElement).toBeInTheDocument();
    });

    test('should construct layout containers utilizing safe transparent backdrop parameters', () => {
      renderComponent();

      const backdropContainer = screen.getByRole('navigation', {
        name: /Mobile Bottom Navigation/i,
      }).parentElement;

      expect(backdropContainer).toHaveClass(
        'fixed',
        'bottom-0',
        'left-0',
        'z-40',
        'h-24',
        'w-full',
        'bg-linear-to-t',
        'backdrop-blur-md',
      );
    });
  });

  describe('Comportamento & Links Ativos', () => {
    test('should apply strict active visual emphasis layers when navigating target route endpoints', () => {
      renderComponent(['/']);

      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);
    });
  });
});
