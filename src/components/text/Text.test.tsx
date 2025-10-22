import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import * as S from './Text';

describe('Text', () => {
  describe('Rendering', () => {
    test('should render the text "Test text"', () => {
      const {getByText} = render(<S.Text>Test text</S.Text>);
      const result = getByText('Test text');
      expect(result).toBeDefined();
    });

    test('should render an "h1" element when the type prop is "h1"', () => {
      const {container} = render(<S.Text type="h1">Title</S.Text>);
      const result = container.querySelector('h1');
      expect(result).toBeInTheDocument();
    });

    test('should render a "p" element by default when type is not provided', () => {
      const {container} = render(<S.Text>Default paragraph</S.Text>);
      const result = container.querySelector('p');
      expect(result).toBeInTheDocument();
    });

    test('should apply "text-transform: uppercase" WHEN the toUpper prop is true', () => {
      const {container} = render(<S.Text toUpper={true}>Uppercase text</S.Text>);
      const result = container.firstChild;
      expect(result).toHaveStyle('text-transform: uppercase');
    });

    test('should NOT render text in uppercase WHEN toUpper is not passed', () => {
      const {getByText} = render(<S.Text>Normal text</S.Text>);
      const result = getByText('Normal text');
      expect(result).toBeInTheDocument();
    });
  });

  describe('Propriedades de Estilo', () => {
    test('should apply font size correctly WHEN the size prop is "16"', () => {
      const {container} = render(<S.Text size={16}>Text with size 16</S.Text>);
      expect(container.firstChild).toHaveStyle('font-size: 16px');
    });

    test('should apply line-height correctly WHEN the lineHeight prop is "24"', () => {
      const {container} = render(<S.Text lineHeight={24}>Text with line-height 24</S.Text>);
      expect(container.firstChild).toHaveStyle('line-height: 24px');
    });

    test('should apply margin-top correctly WHEN the marginTop prop is "20"', () => {
      const {container} = render(<S.Text marginTop={20}>Text with margin</S.Text>);
      expect(container.firstChild).toHaveStyle('margin-top: 20px');
    });

    test('should apply cursor correctly WHEN the cursor prop is "pointer"', () => {
      const {container} = render(<S.Text cursor="pointer">Text with cursor pointer</S.Text>);
      expect(container.firstChild).toHaveStyle('cursor: pointer');
    });

    test('should apply color correctly WHEN the color prop is provided', () => {
      const {container} = render(<S.Text color="#ff0000">Colored text</S.Text>);
      expect(container.firstChild).toHaveStyle('color: #ff0000');
    });
  });

  describe('Comportamento de Children', () => {
    test('should render React elements passed as children', () => {
      const {getByText} = render(
        <S.Text>
          <strong>Text with child element</strong>
        </S.Text>,
      );
      const result = getByText('Text with child element');
      expect(result).toBeInTheDocument();
    });

    test('should correctly render multiple React elements passed as children', () => {
      const {getByText} = render(
        <S.Text>
          <span>Text 1</span>
          <span>Text 2</span>
        </S.Text>,
      );
      expect(getByText('Text 1')).toBeInTheDocument();
      expect(getByText('Text 2')).toBeInTheDocument();
    });
  });
});
