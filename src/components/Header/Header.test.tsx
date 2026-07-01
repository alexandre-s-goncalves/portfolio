import {describe, test, expect, beforeEach, vi} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'context/ThemeContext';
import {Header} from './Header';
import i18n from '../../i18n/i18n';

describe('Header Component', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('pt');
    localStorage.clear();
    document.documentElement.className = '';
  });

  const renderWithProviders = () => {
    return render(
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </ThemeProvider>
      </I18nextProvider>,
    );
  };

  describe('Render & Tailwind v4', () => {
    test('should render the brand identity elements and specific layout text classes', () => {
      renderWithProviders();

      expect(screen.getByText('Alexandre Gonçalves')).toBeInTheDocument();
      expect(screen.getByRole('banner')).toHaveClass(
        'w-full',
        'border-b',
        'backdrop-blur-md',
      );
    });

    test('should inject the localized placeholders navigation group links into the layout', () => {
      renderWithProviders();

      expect(
        screen.getByRole('navigation', {name: /Main Navigation/i}),
      ).toBeInTheDocument();

      const homeLinks = screen.getAllByRole('link', {name: /Início/i});
      const skillsLinks = screen.getAllByRole('link', {name: /Habilidades/i});
      const projectsLinks = screen.getAllByRole('link', {name: /Projetos/i});
      const aboutLinks = screen.getAllByRole('link', {name: /Sobre/i});

      expect(homeLinks[0]).toBeInTheDocument();
      expect(skillsLinks[0]).toBeInTheDocument();
      expect(projectsLinks[0]).toBeInTheDocument();
      expect(aboutLinks[0]).toBeInTheDocument();
    });

    test('should mount the auxiliary language selector and theme toggle controllers', () => {
      renderWithProviders();

      expect(screen.getByRole('button', {name: /pt/i})).toBeInTheDocument();
      expect(
        screen.getByRole('button', {name: /Ativar modo escuro/i}),
      ).toBeInTheDocument();
    });
  });

  describe('Behavior', () => {
    test('should maintain navigation elements active and inactive conditional design structures', () => {
      renderWithProviders();

      const activeItems = screen.getAllByRole('link', {name: /Início/i});
      const inactiveItems = screen.getAllByRole('link', {name: /Sobre/i});

      expect(activeItems[0]).toHaveClass('text-slate-900', 'font-bold');
      expect(inactiveItems[0]).toHaveClass(
        'text-slate-400',
        'hover:text-slate-600',
      );
    });

    test('should toggle mobile navigation drawer and switch aria attributes upon toggle button interaction', () => {
      renderWithProviders();

      const toggleButton = screen.getByRole('button', {name: /Abrir menu/i});
      expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
      expect(
        screen.queryByRole('navigation', {name: /Mobile Navigation/i}),
      ).not.toBeInTheDocument();

      fireEvent.click(toggleButton);

      expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
      const mobileMenu = screen.getByRole('navigation', {
        name: /Mobile Navigation/i,
      });
      expect(mobileMenu).toBeInTheDocument();

      const mobileHomeLinks = screen.getAllByRole('link', {name: /Início/i});
      expect(mobileHomeLinks[1]).toHaveClass('bg-slate-100', 'font-bold');

      fireEvent.click(screen.getByRole('button', {name: /Fechar menu/i}));
      expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
      expect(
        screen.queryByRole('navigation', {name: /Mobile Navigation/i}),
      ).not.toBeInTheDocument();
    });

    test('should automatically collapse mobile navigation drawer when clicking a navigation link route', () => {
      renderWithProviders();

      const toggleButton = screen.getByRole('button', {name: /Abrir menu/i});
      fireEvent.click(toggleButton);

      const mobileAboutLinks = screen.getAllByRole('link', {name: /Sobre/i});
      fireEvent.click(mobileAboutLinks[1]!);

      expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
      expect(
        screen.queryByRole('navigation', {name: /Mobile Navigation/i}),
      ).not.toBeInTheDocument();
    });

    test('should automatically collapse mobile navigation drawer when intercepting a click outside the component container', () => {
      renderWithProviders();

      const toggleButton = screen.getByRole('button', {name: /Abrir menu/i});
      fireEvent.click(toggleButton);
      expect(
        screen.getByRole('navigation', {name: /Mobile Navigation/i}),
      ).toBeInTheDocument();

      fireEvent.mouseDown(document.body);

      expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
      expect(
        screen.queryByRole('navigation', {name: /Mobile Navigation/i}),
      ).not.toBeInTheDocument();
    });

    test('should ignore external click interactions if the mobile navigation drawer is already closed', () => {
      renderWithProviders();

      const toggleButton = screen.getByRole('button', {name: /Abrir menu/i});
      expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

      fireEvent.mouseDown(document.body);

      expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
      expect(
        screen.queryByRole('navigation', {name: /Mobile Navigation/i}),
      ).not.toBeInTheDocument();
    });

    test('should NOT collapse mobile navigation drawer when a click interaction happens inside the component container', () => {
      renderWithProviders();

      const toggleButton = screen.getByRole('button', {name: /Abrir menu/i});
      fireEvent.click(toggleButton);

      const mobileMenu = screen.getByRole('navigation', {
        name: /Mobile Navigation/i,
      });
      expect(mobileMenu).toBeInTheDocument();

      fireEvent.mouseDown(mobileMenu);
      expect(mobileMenu).toBeInTheDocument();
      expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    });

    test('should invoke removeEventListener cleanup routing during component destruction', () => {
      const removeSpy = vi.spyOn(document, 'removeEventListener');

      const {unmount: unmountClosed} = renderWithProviders();
      unmountClosed();
      expect(removeSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));

      const {unmount: unmountOpen} = renderWithProviders();
      const toggleButton = screen.getByRole('button', {name: /Abrir menu/i});
      fireEvent.click(toggleButton);
      unmountOpen();
      expect(removeSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));

      removeSpy.mockRestore();
    });
  });
});
