import {describe, test, expect, beforeEach} from 'vitest';
import {render, screen} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import {NotFound} from './NotFound';
import i18n from '../../i18n/i18n';

describe('NotFound Page Unit Test', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('pt');
  });

  const renderComponent = () => {
    return render(
      <I18nextProvider i18n={i18n}>
        <NotFound />
      </I18nextProvider>,
    );
  };

  describe('Render & Tailwind v4', () => {
    test('should render error identification layout elements completely', () => {
      renderComponent();
      expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('404');
      expect(screen.getByText('Página não encontrada')).toBeInTheDocument();
    });

    test('should enforce specialized emphasis styles matching error template status', () => {
      renderComponent();
      expect(screen.getByRole('heading', {level: 1})).toHaveClass(
        'text-6xl',
        'font-black',
        'text-sky-500',
      );
    });
  });
});
