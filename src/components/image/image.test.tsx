import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import * as S from './image';

describe('Image component', () => {
  test('renders img element with provided src, alt and testId', () => {
    const src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"/>';
    const {getByTestId} = render(<S.Image testId="flag" src={src} alt="flag" />);

    const img = getByTestId('flag-img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', src);
    expect(img).toHaveAttribute('alt', 'flag');
  });

  test('applies container inline sizing styles when width and height provided', () => {
    const src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"/>';
    const {getByTestId} = render(<S.Image testId="flag" src={src} width={40} height={30} />);

    const container = getByTestId('container-image');
    expect(container).toHaveStyle('min-width: 40px');
    expect(container).toHaveStyle('min-height: 30px');
    expect(container).toHaveStyle('max-width: 40px');
    expect(container).toHaveStyle('max-height: 30px');
  });

  test('passes cursor and spinner props to styled image', () => {
    const src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"/>';
    const {getByTestId} = render(
      <S.Image testId="flag" src={src} cursor="pointer" spinner spinnerSpeed={1} rotation={90} />,
    );

    const img = getByTestId('flag-img');
    expect(img).toHaveStyle('cursor: pointer');
    expect(img).toHaveStyle('transform: rotate(90deg)');
  });

  test('renders with default testId when testId prop is not provided', () => {
    const src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"/>';
    const {getByTestId} = render(<S.Image src={src} alt="test image" />);

    const img = getByTestId('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', src);
  });

  test('applies default cursor when cursor prop is not provided', () => {
    const src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"/>';
    const {getByTestId} = render(<S.Image testId="default-cursor" src={src} />);

    const img = getByTestId('default-cursor-img');
    expect(img).toHaveStyle('cursor: default');
  });

  test('applies color and keepColors props to styled image', () => {
    const src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"/>';
    const {getByTestId} = render(<S.Image testId="colored" src={src} color="#FF0000" keepColors />);

    const img = getByTestId('colored-img');
    expect(img).toBeInTheDocument();
  });
});
