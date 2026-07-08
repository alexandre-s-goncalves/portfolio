import {describe, test, expect, beforeEach, vi} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import {BrowserRouter} from 'react-router-dom';
import {NotFoundPage} from './index';
import i18n from '../../i18n/i18n';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('NotFound Page System Integration', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('pt');
    mockNavigate.mockClear();
  });

  const renderComponent = () => {
    return render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
      </I18nextProvider>,
    );
  };

  describe('Renderização & Tailwind v4', () => {
    test('should mount background branding vectors and initial page contents completely', () => {
      renderComponent();

      expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('404');
      expect(screen.getByRole('heading', {level: 2})).toHaveTextContent(
        /Página não encontrada|Page not found/i,
      );
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('should enforce precise core tailwind structural visual layout styles', () => {
      renderComponent();

      expect(screen.getByRole('heading', {level: 1})).toHaveClass(
        'text-[90px]',
        'md:text-[120px]',
        'font-black',
        'tracking-tighter',
        'text-transparent',
        'bg-clip-text',
        'bg-linear-to-b',
      );
    });
  });

  describe('Comportamento & Ações', () => {
    test('should invoke safe navigation handler redirecting to root directory path on click', () => {
      renderComponent();

      const backButton = screen.getByRole('button');
      fireEvent.click(backButton);

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });
});
