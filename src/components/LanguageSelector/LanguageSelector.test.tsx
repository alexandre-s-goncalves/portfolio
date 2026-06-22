import {describe, test, expect, beforeEach, vi} from 'vitest';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import {LanguageSelector} from './LanguageSelector';
import i18n from '../../i18n/i18n';

describe('LanguageSelector Component', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('pt');
  });

  const renderWithI18n = () => {
    return render(
      <I18nextProvider i18n={i18n}>
        <LanguageSelector />
      </I18nextProvider>,
    );
  };

  describe('Render', () => {
    test('should render the trigger button with the initial active language', () => {
      renderWithI18n();

      const triggerButton = screen.getByRole('button', {expanded: false});
      expect(triggerButton).toBeInTheDocument();
      expect(screen.getByText(/pt/i)).toBeInTheDocument();
    });

    test('should apply the correct Tailwind v4 classes to ensure styling', () => {
      renderWithI18n();

      const triggerButton = screen.getByRole('button');
      expect(triggerButton).toHaveClass(
        'flex',
        'items-center',
        'rounded-lg',
        'dark:text-slate-300',
        'dark:hover:bg-slate-800',
      );
    });
  });

  describe('Behavior', () => {
    test('should open dropdown menu and inject all 4 language options on click', () => {
      renderWithI18n();
      const triggerButton = screen.getByRole('button');

      fireEvent.click(triggerButton);

      expect(screen.getByRole('button', {expanded: true})).toBeInTheDocument();
      expect(screen.getByRole('menu')).toBeInTheDocument();

      const items = screen.getAllByRole('menuitem');
      expect(items).toHaveLength(4);
    });

    test('should ensure the active language button starts as disabled inside the dropdown menu', () => {
      renderWithI18n();

      fireEvent.click(screen.getByRole('button'));

      const ptItem = screen.getByTestId('idioma-portugues');
      expect(ptItem).toBeDisabled();
    });

    test('should fallback to default language code when i18n language context is empty', () => {
      const originalLanguage = i18n.language;
      Object.defineProperty(i18n, 'language', {
        value: undefined,
        configurable: true,
      });

      renderWithI18n();
      expect(screen.getByText(/pt/i)).toBeInTheDocument();

      Object.defineProperty(i18n, 'language', {
        value: originalLanguage,
        configurable: true,
      });
    });

    test('should change language to English when EN option is selected and update trigger text', async () => {
      renderWithI18n();

      fireEvent.click(screen.getByRole('button'));

      const enItem = screen.getByTestId('idioma-ingles');
      fireEvent.click(enItem);

      await waitFor(() => {
        expect(screen.queryByRole('menu')).not.toBeInTheDocument();
        expect(screen.getByText(/en/i)).toBeInTheDocument();
      });
    });

    test('should close dropdown menu when an external click occurs', () => {
      renderWithI18n();

      fireEvent.click(screen.getByRole('button'));
      expect(screen.getByRole('menu')).toBeInTheDocument();

      fireEvent.mouseDown(document.body);
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    test('should NOT close dropdown menu when a click happens inside the container', () => {
      renderWithI18n();
      const triggerButton = screen.getByRole('button');

      fireEvent.click(triggerButton);
      expect(screen.getByRole('menu')).toBeInTheDocument();

      fireEvent.mouseDown(triggerButton);
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    test('should close menu and return keyboard focus to trigger when pressing Escape', () => {
      renderWithI18n();
      const triggerButton = screen.getByRole('button');

      fireEvent.click(triggerButton);
      expect(screen.getByRole('menu')).toBeInTheDocument();

      fireEvent.keyDown(screen.getByRole('menu'), {key: 'Escape'});
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
      expect(triggerButton).toHaveFocus();
    });

    test('should manage keyboard selection down the menu accurately using ArrowDown keys', () => {
      renderWithI18n();
      fireEvent.click(screen.getByRole('button'));

      const items = screen.getAllByRole('menuitem');
      items[1]?.focus();
      expect(items[1]).toHaveFocus();

      fireEvent.keyDown(screen.getByRole('menu'), {key: 'ArrowDown'});
      expect(items[2]).toHaveFocus();

      fireEvent.keyDown(screen.getByRole('menu'), {key: 'ArrowDown'});
      expect(items[3]).toHaveFocus();
    });

    test('should manage keyboard selection up the menu accurately using ArrowUp keys', () => {
      renderWithI18n();
      fireEvent.click(screen.getByRole('button'));

      const items = screen.getAllByRole('menuitem');

      items[1]?.focus();
      expect(items[1]).toHaveFocus();

      fireEvent.keyDown(screen.getByRole('menu'), {key: 'ArrowDown'});
      expect(items[2]).toHaveFocus();

      fireEvent.keyDown(screen.getByRole('menu'), {key: 'ArrowUp'});
      expect(items[1]).toHaveFocus();
    });

    test('should cycle focus to the last element when ArrowUp is pressed on the first element', async () => {
      await i18n.changeLanguage('en');
      renderWithI18n();

      fireEvent.click(screen.getByRole('button'));

      const items = screen.getAllByRole('menuitem');

      items[0]?.focus();
      expect(items[0]).toHaveFocus();

      fireEvent.keyDown(screen.getByRole('menu'), {key: 'ArrowUp'});
      expect(items[3]).toHaveFocus();
    });

    test('should skip action when an unmapped key is pressed while the menu is open', () => {
      renderWithI18n();
      fireEvent.click(screen.getByRole('button'));

      const menuElement = screen.getByRole('menu');

      fireEvent.keyDown(menuElement, {key: 'Enter'});
      expect(menuElement).toBeInTheDocument();
    });

    test('should ignore navigation arrow keys when the dropdown menu is closed', () => {
      renderWithI18n();
      const triggerButton = screen.getByRole('button');

      fireEvent.keyDown(triggerButton, {key: 'ArrowDown'});
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    test('should invoke removeEventListener cleanup routing during component destruction', () => {
      const removeSpy = vi.spyOn(document, 'removeEventListener');

      const {unmount: unmountClosed} = renderWithI18n();
      unmountClosed();
      expect(removeSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));

      const {unmount: unmountOpen} = renderWithI18n();
      fireEvent.click(screen.getByRole('button'));
      unmountOpen();
      expect(removeSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));

      removeSpy.mockRestore();
    });
  });
});
