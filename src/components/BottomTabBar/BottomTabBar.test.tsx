import {describe, test, expect, beforeEach} from 'vitest';
import {render, screen, act} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import {BrowserRouter} from 'react-router-dom';
import {BottomTabBar} from './BottomTabBar';
import i18n from '../../i18n/i18n';
import {AppRoutes} from 'resources/enum';

describe('BottomTabBar Component', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('pt');
  });

  const renderWithProviders = () => {
    return render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <BottomTabBar />
        </BrowserRouter>
      </I18nextProvider>,
    );
  };

  describe('Render & Structure', () => {
    test('should mount mobile bottom navigation structure with correct role', () => {
      renderWithProviders();

      const navElement = screen.getByRole('navigation', {
        name: /Mobile Bottom Navigation/i,
      });
      expect(navElement).toBeInTheDocument();
      expect(navElement).toHaveClass(
        'fixed',
        'bottom-4',
        'left-1/2',
        'z-50',
        'md:hidden',
      );
    });

    test('should map all 5 required navigation link destinations from enum', () => {
      renderWithProviders();

      const links = screen.getAllByRole('link');
      expect(links.length).toBe(5);

      expect(links[0]).toHaveAttribute('href', AppRoutes.HOME);
      expect(links[1]).toHaveAttribute('href', AppRoutes.SKILLS);
      expect(links[2]).toHaveAttribute('href', AppRoutes.PROJECTS);
      expect(links[3]).toHaveAttribute('href', AppRoutes.ABOUT);
      expect(links[4]).toHaveAttribute('href', AppRoutes.SETTINGS);
    });
  });

  describe('Localization & Theme Reactivity', () => {
    test('should asset locked manual translated labels for portuguese initially', () => {
      renderWithProviders();

      expect(screen.getByText('Início')).toBeInTheDocument();
      expect(screen.getByText('Habilidades')).toBeInTheDocument();
      expect(screen.getByText('Projetos')).toBeInTheDocument();
      expect(screen.getByText('Sobre')).toBeInTheDocument();
      expect(screen.getByText('Ajustes')).toBeInTheDocument();
    });

    test('should dynamically swap navigation text labels when language changing context occurs', async () => {
      renderWithProviders();

      await act(async () => {
        await i18n.changeLanguage('en');
      });

      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Skills')).toBeInTheDocument();
      expect(screen.getByText('Projects')).toBeInTheDocument();
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Settings')).toBeInTheDocument();
    });
  });
});
