import React, {act, ReactNode} from 'react';
import {ThemeProvider, useTheme} from './ThemeContext';
import {renderHook} from '@testing-library/react';

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeContextProvider = ({children}: ThemeProviderProps) => (
  <ThemeProvider>{children}</ThemeProvider>
);

const wrapper = ({children}: ThemeProviderProps) => (
  <ThemeContextProvider>{children}</ThemeContextProvider>
);

describe('ThemeContext', () => {
  test('should have theme state equals false by default', () => {
    const {result} = renderHook(() => useTheme(), {wrapper});

    expect(result.current.themeDark).toBeFalsy();
  });

  test('should toggle theme state to true', async () => {
    const {result} = renderHook(() => useTheme(), {wrapper});

    await act(async () => {
      result.current.handleToggle();
    });

    expect(result.current.themeDark).toBe(true);
  });
});
