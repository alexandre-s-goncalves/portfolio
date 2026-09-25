import {describe, test, expect, beforeEach} from 'vitest';
import {render, screen} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import {BrowserRouter} from 'react-router-dom';
import {Skills} from './index';
import i18n from '../../i18n/i18n';

describe('Skills Page System Integration', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('pt');
  });

  const renderComponent = () => {
    return render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Skills />
        </BrowserRouter>
      </I18nextProvider>,
    );
  };

  describe('Renderização & Tailwind v4', () => {
    test('should render page headers and structural category containers completely', () => {
      renderComponent();

      expect(
        screen.getByRole('heading', {level: 1, name: /Habilidades/i}),
      ).toBeInTheDocument();
      expect(screen.getByText('Frontend & Mobile')).toBeInTheDocument();
      expect(screen.getByText('Ferramentas & Testes')).toBeInTheDocument();
    });

    test('should map all standard core development skills cards to the viewport', () => {
      renderComponent();

      [
        'React.js',
        'React Native',
        'JavaScript',
        'TypeScript',
        'Git',
        'Jest',
      ].forEach(skill => {
        expect(screen.getByText(skill)).toBeInTheDocument();
      });
    });
  });
});
