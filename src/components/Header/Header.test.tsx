import {describe, test, expect, beforeEach} from 'vitest';
import {render, screen} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
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
          <Header />
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
        'sticky',
        'backdrop-blur-md',
      );
    });

    test('should inject the localized placeholders navigation group links into the layout', () => {
      renderWithProviders();

      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(screen.getByRole('button', {name: /Início/i})).toBeInTheDocument();
      expect(
        screen.getByRole('button', {name: /Habilidades/i}),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', {name: /Projetos/i}),
      ).toBeInTheDocument();
      expect(screen.getByRole('button', {name: /Sobre/i})).toBeInTheDocument();
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

      const activeItem = screen.getByRole('button', {name: /Início/i});
      const inactiveItem = screen.getByRole('button', {name: /Sobre/i});

      expect(activeItem).toHaveClass('text-slate-900', 'font-bold');
      expect(inactiveItem).toHaveClass(
        'text-slate-400',
        'hover:text-slate-600',
      );
    });
  });
});
