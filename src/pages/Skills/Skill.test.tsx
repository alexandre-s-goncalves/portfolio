import {describe, test, expect, beforeEach} from 'vitest';
import {render, screen} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import {Skills} from './Skills';
import i18n from '../../i18n/i18n';

describe('Skills Page Unit Test', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('pt');
  });

  const renderComponent = () => {
    return render(
      <I18nextProvider i18n={i18n}>
        <Skills />
      </I18nextProvider>,
    );
  };

  describe('Render & Tailwind v4', () => {
    test('should render localized page title with initial text content', () => {
      renderComponent();
      expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(
        'Página Habilidades',
      );
    });

    test('should apply strict typographic layout classes to heading element', () => {
      renderComponent();
      expect(screen.getByRole('heading', {level: 1})).toHaveClass(
        'text-3xl',
        'font-bold',
        'text-slate-800',
      );
    });
  });
});
