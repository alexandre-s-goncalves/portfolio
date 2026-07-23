import {describe, test, expect, beforeEach} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
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
        screen.getByRole('heading', {level: 1, name: /Minhas Habilidades/i}),
      ).toBeInTheDocument();
      expect(screen.getByText('Frontend & Mobile')).toBeInTheDocument();
      expect(screen.getByText('Ferramentas & Testes')).toBeInTheDocument();
    });

    test('should map all standard core development skills buttons to the viewport', () => {
      renderComponent();

      expect(
        screen.getByRole('button', {name: /React.js/i}),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', {name: /React Native/i}),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', {name: /JavaScript/i}),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', {name: /TypeScript/i}),
      ).toBeInTheDocument();
      expect(screen.getByRole('button', {name: /Git/i})).toBeInTheDocument();
      expect(screen.getByRole('button', {name: /Jest/i})).toBeInTheDocument();
    });
  });

  describe('Comportamento & Estado Reativo', () => {
    test('should dynamic toggle focus highlight layers and update footer details on skill interaction click', () => {
      renderComponent();

      const jestButton = screen.getByRole('button', {name: /Jest/i});

      expect(screen.queryByText('Jest — Stack View')).not.toBeInTheDocument();

      fireEvent.click(jestButton);
      expect(screen.getByText('Jest — Stack View')).toBeInTheDocument();
      expect(
        screen.getByText(/Em cenários reais com Jest/i),
      ).toBeInTheDocument();

      fireEvent.click(jestButton);
      expect(screen.queryByText('Jest — Stack View')).not.toBeInTheDocument();
    });
  });
});
