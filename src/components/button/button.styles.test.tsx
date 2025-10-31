import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from './button.styles';
import ArrowSVG from 'assets/icons/right-arrow-icon.svg';

describe('button.styles', () => {
  describe('ButtonContainer', () => {
    test('should match snapshot', () => {
      const {container} = render(<S.ButtonContainer />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should render as button element', () => {
      const {container} = render(<S.ButtonContainer />);
      const element = container.firstChild as HTMLElement;
      expect(element.nodeName).toBe('BUTTON');
    });

    test('should have flex layout', () => {
      const {getByTestId} = render(<S.ButtonContainer data-testid="button" />);
      const button = getByTestId('button');
      expect(button).toHaveStyle('display: flex');
      expect(button).toHaveStyle('align-items: center');
      expect(button).toHaveStyle('justify-content: center');
    });

    test('should have correct height', () => {
      const {getByTestId} = render(<S.ButtonContainer data-testid="button" />);
      const button = getByTestId('button');
      expect(button).toHaveStyle('height: 40px');
    });

    test('should have cursor pointer', () => {
      const {getByTestId} = render(<S.ButtonContainer data-testid="button" />);
      const button = getByTestId('button');
      expect(button).toHaveStyle('cursor: pointer');
    });

    test('should have border radius', () => {
      const {getByTestId} = render(<S.ButtonContainer data-testid="button" />);
      const button = getByTestId('button');
      expect(button).toHaveStyle('border-radius: 8px');
    });

    test('should have correct gap', () => {
      const {getByTestId} = render(<S.ButtonContainer data-testid="button" />);
      const button = getByTestId('button');
      expect(button).toHaveStyle('gap: 8px');
    });

    test('should have lightgray background', () => {
      const {getByTestId} = render(<S.ButtonContainer data-testid="button" />);
      const button = getByTestId('button');
      expect(button).toHaveStyle('background-color: #d3d3d3');
    });

    test('should have default cursor when disabled', () => {
      const {getByTestId} = render(<S.ButtonContainer data-testid="button" disabled />);
      const button = getByTestId('button');
      expect(button).toHaveStyle('cursor: default');
    });
  });

  describe('ButtonIcon', () => {
    test('should match snapshot', () => {
      const {container} = render(<S.ButtonIcon icon={ArrowSVG} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should render SVG element', () => {
      const {container} = render(<S.ButtonIcon icon={ArrowSVG} />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  describe('ButtonText', () => {
    test('should match snapshot', () => {
      const {container} = render(<S.ButtonText>Text</S.ButtonText>);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should have default white color', () => {
      const {getByText} = render(<S.ButtonText>Button Text</S.ButtonText>);
      const text = getByText('Button Text');
      expect(text).toHaveStyle('color: #ffffff');
    });

    test('should have correct font size', () => {
      const {getByText} = render(<S.ButtonText>Text</S.ButtonText>);
      const text = getByText('Text');
      expect(text).toHaveStyle('font-size: 14px');
    });

    test('should prevent text wrapping', () => {
      const {getByText} = render(<S.ButtonText>Text</S.ButtonText>);
      const text = getByText('Text');
      expect(text).toHaveStyle('white-space: nowrap');
    });
  });
});
