import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from './iconButton.styles';

describe('iconButton.styles', () => {
  test('ButtonStyled should match the snapshot', () => {
    const {container} = render(<S.ButtonStyled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('ButtonStyled renders as a button element', () => {
    const {container} = render(<S.ButtonStyled />);
    const element = container.firstChild as HTMLElement;
    expect(element.nodeName).toBe('BUTTON');
  });

  test('ButtonStyled has cursor pointer by default', () => {
    const {getByTestId} = render(<S.ButtonStyled data-testid="btn" />);
    const button = getByTestId('btn');
    expect(button).toHaveStyle('cursor: pointer');
  });

  test('ButtonStyled with disabled state', () => {
    const {getByTestId} = render(<S.ButtonStyled data-testid="btn" disabled />);
    const button = getByTestId('btn');
    expect(button).toBeDisabled();
  });

  test('ButtonStyled has flex display and center alignment', () => {
    const {getByTestId} = render(<S.ButtonStyled data-testid="btn" />);
    const button = getByTestId('btn');
    expect(button).toHaveStyle('display: flex');
    expect(button).toHaveStyle('align-items: center');
    expect(button).toHaveStyle('justify-content: center');
  });

  test('ButtonStyled has no border and outline', () => {
    const {getByTestId} = render(<S.ButtonStyled data-testid="btn" />);
    const button = getByTestId('btn');
    expect(button).toHaveStyle('border: none');
    expect(button).toHaveStyle('outline: none');
  });

  test('ButtonStyled accepts custom inline styles', () => {
    const {getByTestId} = render(
      <S.ButtonStyled
        data-testid="btn"
        style={{backgroundColor: '#FF0000', padding: '20px', borderRadius: '8px'}}
      />,
    );
    const button = getByTestId('btn');
    expect(button).toHaveStyle('background-color: #FF0000');
    expect(button).toHaveStyle('padding: 20px');
    expect(button).toHaveStyle('border-radius: 8px');
  });

  test('ButtonStyled accepts className prop', () => {
    const {getByTestId} = render(<S.ButtonStyled data-testid="btn" className="custom-btn" />);
    const button = getByTestId('btn');
    expect(button).toHaveClass('custom-btn');
  });
});
