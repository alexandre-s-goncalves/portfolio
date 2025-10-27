import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from './webRoutes.styles';

describe('webRoutes.styles', () => {
  describe('WebRoutesContainer', () => {
    test('should match the snapshot with default props', () => {
      const {container} = render(<S.WebRoutesContainer $backgroundblack={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should apply light background when $backgroundblack is false', () => {
      const {getByTestId} = render(
        <S.WebRoutesContainer data-testid="container" $backgroundblack={false} />,
      );
      const container = getByTestId('container');
      expect(container).toHaveStyle('background-color: #ffffff');
    });

    test('should apply dark background when $backgroundblack is true', () => {
      const {getByTestId} = render(
        <S.WebRoutesContainer data-testid="container" $backgroundblack={true} />,
      );
      const container = getByTestId('container');
      expect(container).toHaveStyle('background-color: rgb(10, 10, 10)');
    });

    test('should render as main element', () => {
      const {container} = render(<S.WebRoutesContainer $backgroundblack={false} />);
      const element = container.firstChild as HTMLElement;
      expect(element.nodeName).toBe('MAIN');
    });

    test('should have flex layout with column direction', () => {
      const {getByTestId} = render(
        <S.WebRoutesContainer data-testid="container" $backgroundblack={false} />,
      );
      const container = getByTestId('container');
      expect(container).toHaveStyle('display: flex');
      expect(container).toHaveStyle('flex-direction: column');
    });

    test('should have full viewport height', () => {
      const {getByTestId} = render(
        <S.WebRoutesContainer data-testid="container" $backgroundblack={false} />,
      );
      const container = getByTestId('container');
      expect(container).toHaveStyle('height: 100vh');
    });
  });

  describe('Content', () => {
    test('should match the snapshot', () => {
      const {container} = render(<S.Content />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should render as div element', () => {
      const {container} = render(<S.Content />);
      const element = container.firstChild as HTMLElement;
      expect(element.nodeName).toBe('DIV');
    });

    test('should have flex layout with full width and height', () => {
      const {getByTestId} = render(<S.Content data-testid="content" />);
      const content = getByTestId('content');
      expect(content).toHaveStyle('display: flex');
      expect(content).toHaveStyle('width: 100%');
      expect(content).toHaveStyle('height: 100%');
    });

    test('should have proper margins', () => {
      const {getByTestId} = render(<S.Content data-testid="content" />);
      const content = getByTestId('content');
      expect(content).toHaveStyle('margin-top: 116px');
      expect(content).toHaveStyle('margin-bottom: 70px');
    });

    test('should have vertical scroll', () => {
      const {getByTestId} = render(<S.Content data-testid="content" />);
      const content = getByTestId('content');
      expect(content).toHaveStyle('overflow-y: auto');
    });
  });
});
