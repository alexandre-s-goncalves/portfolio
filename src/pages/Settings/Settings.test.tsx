import {describe, test, expect, beforeEach} from 'vitest';
import {render, screen, act} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import {ThemeProvider} from 'context/ThemeContext';
import {Settings} from './index';
import i18n from '../../i18n/i18n';

describe('Settings Page Component', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('pt');
    localStorage.clear();
    document.documentElement.className = '';
  });

  const renderWithProviders = () => {
    return render(
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <Settings />
        </ThemeProvider>
      </I18nextProvider>,
    );
  };

  describe('Render & Structure', () => {
    test('should render all localized core text labels and headers accurately', () => {
      renderWithProviders();

      expect(
        screen.getByRole('heading', {level: 1, name: 'Configurações'}),
      ).toBeInTheDocument();
      expect(screen.getByText('Idioma da Interface')).toBeInTheDocument();
      expect(
        screen.getByText('Mude o dicionário global do site'),
      ).toBeInTheDocument();
      expect(screen.getByText('Tema Visual')).toBeInTheDocument();
      expect(
        screen.getByText('Alternar entre Modo Claro e Escuro'),
      ).toBeInTheDocument();
    });

    test('should embed the inner language selection trigger and dark mode buttons', () => {
      renderWithProviders();

      expect(screen.getByRole('button', {name: /pt/i})).toBeInTheDocument();
      expect(
        screen.getByRole('button', {name: /Ativar modo escuro/i}),
      ).toBeInTheDocument();
    });
  });

  describe('Localization Reactivity', () => {
    test('should dynamically swap content text labels when i18n locale context modifies', async () => {
      renderWithProviders();

      await act(async () => {
        await i18n.changeLanguage('en');
      });

      expect(
        screen.getByRole('heading', {level: 1, name: 'Settings'}),
      ).toBeInTheDocument();
      expect(screen.getByText('Interface Language')).toBeInTheDocument();
      expect(
        screen.getByText('Change the global website dictionary'),
      ).toBeInTheDocument();
      expect(screen.getByText('Visual Theme')).toBeInTheDocument();
      expect(
        screen.getByText('Switch between Light and Dark Mode'),
      ).toBeInTheDocument();
    });
  });
});
