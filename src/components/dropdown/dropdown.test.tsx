import React from 'react';
import {render, screen, fireEvent, within} from '@testing-library/react';
import '@testing-library/jest-dom';
import {useTranslation} from 'react-i18next';
import {languages} from 'utils/i18n/i18n.constants';
import {colors} from 'resources/colors';
import {Dropdown} from './dropdown';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

const useTranslationMock = useTranslation as jest.Mock;

describe('Dropdown', () => {
  const setup = (resolvedLanguage = 'pt') => {
    useTranslationMock.mockReturnValue({
      t: (key: string) => key,
      i18n: {
        changeLanguage: jest.fn(),
        resolvedLanguage,
      },
    });
    return render(<Dropdown />);
  };

  describe('Rendering', () => {
    test('should render the correct initial text and icon', () => {
      setup('pt');
      const selectedText = screen.getByTestId('dropdown-select');
      expect(selectedText).toHaveTextContent('PT');
      expect(screen.getByTestId('selected-idioma-portugues')).toBeInTheDocument();
    });

    test('should render language options in the menu', () => {
      setup();
      fireEvent.click(screen.getByTestId('dropdown-select'));
      const menu = screen.getByTestId('dropdown-menu');

      expect(within(menu).getByTestId('idioma-portugues')).toBeInTheDocument();
      expect(within(menu).getByTestId('idioma-ingles')).toBeInTheDocument();
      expect(within(menu).getByTestId('idioma-frances')).toBeInTheDocument();
    });

    test('should render language flags in the menu', () => {
      setup();
      fireEvent.click(screen.getByTestId('dropdown-select'));
      const menu = screen.getByTestId('dropdown-menu');

      expect(within(menu).getByTestId('flag-idioma-portugues')).toBeInTheDocument();
      expect(within(menu).getByTestId('flag-idioma-ingles')).toBeInTheDocument();
      expect(within(menu).getByTestId('flag-idioma-frances')).toBeInTheDocument();
    });

    test('should render correct language texts in the menu', () => {
      setup();
      fireEvent.click(screen.getByTestId('dropdown-select'));
      const menu = screen.getByTestId('dropdown-menu');

      expect(within(menu).getByText('portuguese')).toBeInTheDocument();
      expect(within(menu).getByText('english')).toBeInTheDocument();
      expect(within(menu).getByText('french')).toBeInTheDocument();
    });
  });

  describe('Behavior', () => {
    test('should open the dropdown on click and keep it open on second click', () => {
      setup();
      const dropdown = screen.getByTestId('dropdown-select');
      const menu = screen.getByTestId('dropdown-menu');

      expect(menu).not.toBeVisible();

      fireEvent.click(dropdown);
      expect(menu).toBeVisible();

      fireEvent.click(dropdown);
      expect(menu).toBeVisible();
    });

    test('should change the language when an option is selected', () => {
      setup();
      const dropdown = screen.getByTestId('dropdown-select');
      fireEvent.click(dropdown);

      const menu = screen.getByTestId('dropdown-menu');
      const frenchOption = within(menu).getByTestId('idioma-frances');
      fireEvent.click(frenchOption);

      expect(useTranslationMock().i18n.changeLanguage).toHaveBeenCalledWith(languages.fr);
    });

    test('should highlight the selected option', () => {
      setup('en');
      const dropdown = screen.getByTestId('dropdown-select');
      fireEvent.click(dropdown);

      const menu = screen.getByTestId('dropdown-menu');
      const englishOption = within(menu).getByTestId('idioma-ingles');

      expect(englishOption).toHaveStyle(`background: ${colors.background03}`);
    });

    test('should close the dropdown when clicking outside', () => {
      setup();
      const dropdown = screen.getByTestId('dropdown-select');

      fireEvent.click(dropdown);
      const menu = screen.getByTestId('dropdown-menu');
      expect(menu).toBeVisible();

      fireEvent.mouseDown(document.body);

      expect(menu).not.toBeVisible();
    });

    describe('Dropdown - Resolved Language', () => {
      test('should render English as selected when resolvedLanguage is "en"', () => {
        setup('en');
        const selectedText = screen.getByTestId('dropdown-select');
        expect(selectedText).toHaveTextContent('EN');
        expect(screen.getByTestId('selected-idioma-ingles')).toBeInTheDocument();
      });

      test('should render French as selected when resolvedLanguage is "fr"', () => {
        setup('fr');
        const selectedText = screen.getByTestId('dropdown-select');
        expect(selectedText).toHaveTextContent('FR');
        expect(screen.getByTestId('selected-idioma-frances')).toBeInTheDocument();
      });

      test('should show "select" when resolvedLanguage does not match', () => {
        setup('de');
        const selectedText = screen.getByTestId('dropdown-select');
        expect(selectedText).toHaveTextContent('select');
        expect(screen.queryByTestId(/selected-/)).not.toBeInTheDocument();
      });
    });
  });
});
