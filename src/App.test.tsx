import {describe, test, expect, beforeEach} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import {ThemeProvider} from 'context/ThemeContext/ThemeContext';
import App from './App';
import i18n from './i18n/i18n';

describe('App Component', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('pt');
    localStorage.clear();
    document.documentElement.className = '';
  });

  const renderWithProviders = () => {
    return render(
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </I18nextProvider>,
    );
  };

  describe('Render', () => {
    test('should render the main title and subtitle with initial translated text', () => {
      renderWithProviders();

      const title = screen.getByRole('heading', {level: 1});
      const subtitle = screen.getByText(/Desenvolvedor de Software/i);

      expect(title).toBeInTheDocument();
      expect(subtitle).toBeInTheDocument();
    });

    test('should apply the correct Tailwind v4 classes to ensure visual styling', () => {
      renderWithProviders();

      const container = screen.getByRole('heading', {level: 1}).parentElement;
      const title = screen.getByRole('heading', {level: 1});

      expect(container).toHaveClass('min-h-screen', 'bg-slate-50', 'flex-col');
      expect(title).toHaveClass('text-4xl', 'font-bold', 'text-sky-500');
    });

    test('should render all 4 language selection buttons in the interface', () => {
      renderWithProviders();

      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(4);
    });

    test('should ensure the initial language button starts as disabled', () => {
      renderWithProviders();

      const ptButton = screen.getByRole('button', {name: /🇧🇷 PT/i});
      expect(ptButton).toBeDisabled();
    });
  });

  describe('Behavior', () => {
    test('should change language to English when EN button is clicked and disable the active button', async () => {
      renderWithProviders();

      const enButton = screen.getByRole('button', {name: /🇺🇸 EN/i});

      fireEvent.click(enButton);

      const titleInEnglish = await screen.findByText(
        /Welcome to my Portfolio/i,
      );
      expect(titleInEnglish).toBeInTheDocument();

      expect(enButton).toBeDisabled();
      expect(enButton).toHaveClass(
        'disabled:opacity-40',
        'disabled:cursor-default',
      );
    });

    test('should dynamically toggle between Spanish and French activating proper button locking states', async () => {
      renderWithProviders();

      const esButton = screen.getByRole('button', {name: /🇪🇸 ES/i});
      const frButton = screen.getByRole('button', {name: /🇫🇷 FR/i});

      fireEvent.click(esButton);
      expect(
        await screen.findByText(/Bienvenido a mi Portafolio/i),
      ).toBeInTheDocument();
      expect(esButton).toBeDisabled();

      fireEvent.click(frButton);
      expect(
        await screen.findByText(/Bienvenue sur mon Portfolio/i),
      ).toBeInTheDocument();
      expect(frButton).toBeDisabled();

      expect(esButton).not.toBeDisabled();
    });

    test('should change language back to Portuguese when PT button is clicked after an language switch', async () => {
      renderWithProviders();

      const ptButton = screen.getByRole('button', {name: /🇧🇷 PT/i});
      const enButton = screen.getByRole('button', {name: /🇺🇸 EN/i});

      fireEvent.click(enButton);
      expect(ptButton).not.toBeDisabled();

      fireEvent.click(ptButton);
      const titleInPortuguese = await screen.findByText(
        /Bem-vindo ao meu Portfólio/i,
      );
      expect(titleInPortuguese).toBeInTheDocument();
      expect(ptButton).toBeDisabled();
    });
  });
});
