import {describe, test, expect, beforeEach, vi, afterEach} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import {ThemeProvider} from 'context/ThemeContext';
import {WebRoutes} from './webRoutes';
import i18n from '../i18n/i18n';

describe('WebRoutes System Integration', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('pt');
    localStorage.clear();
    document.documentElement.className = '';
    window.history.pushState({}, '', '/');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  const renderWithProviders = () => {
    return render(
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <WebRoutes />
        </ThemeProvider>
      </I18nextProvider>,
    );
  };

  describe('Render & Tailwind v4', () => {
    test('should load RootLayout structure and map active Home page text by default', () => {
      renderWithProviders();

      expect(screen.getByRole('banner')).toBeInTheDocument();
      expect(
        screen.getByRole('navigation', {name: /Mobile Bottom Navigation/i}),
      ).toBeInTheDocument();
      expect(screen.getByText('Página Início')).toBeInTheDocument();
    });

    test('should fallback to root directory route when environment base url is empty', () => {
      vi.stubEnv('BASE_URL', '');
      renderWithProviders();

      expect(screen.getByText('Página Início')).toBeInTheDocument();
    });
  });

  describe('Behavior', () => {
    test('should seamlessly transition view states when click handlers fire across links', async () => {
      renderWithProviders();

      const skillsLinks = screen.getAllByRole('link', {name: /Habilidades/i});
      fireEvent.click(skillsLinks[0]!);
      expect(screen.getByText('Página Habilidades')).toBeInTheDocument();

      const projectsLinks = screen.getAllByRole('link', {name: /Projetos/i});
      fireEvent.click(projectsLinks[0]!);
      expect(screen.getByText('Página Projetos')).toBeInTheDocument();

      const aboutLinks = screen.getAllByRole('link', {name: /Sobre/i});
      fireEvent.click(aboutLinks[0]!);
      expect(screen.getByText('Página Sobre')).toBeInTheDocument();

      const settingsLinks = screen.getAllByRole('link', {name: /Ajustes/i});
      fireEvent.click(settingsLinks[0]!);
      expect(screen.getByText('Configurações')).toBeInTheDocument();

      const homeLinks = screen.getAllByRole('link', {name: /Início/i});
      fireEvent.click(homeLinks[0]!);
      expect(screen.getByText('Página Início')).toBeInTheDocument();
    });

    test('should trigger the global fallback catch routing view when an invalid URL route matches', () => {
      window.history.pushState({}, '', '/invalid-route-url-path');
      renderWithProviders();

      expect(screen.getByText('404')).toBeInTheDocument();
      expect(screen.getByText('Página não encontrada')).toBeInTheDocument();
    });
  });
});
