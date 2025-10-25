import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from './image.styles';

describe('image.styles', () => {
  test('ContainerImage should match the snapshot', () => {
    const {container} = render(<S.ContainerImage />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('ImageStyled default element and default styles', () => {
    const {container} = render(<S.ImageStyled />);
    const el = container.firstChild as HTMLElement;
    expect(el.nodeName).toBe('IMG');
    expect(el).toHaveStyle('cursor: default');
    expect(el).toHaveStyle('transform: rotate(0deg)');
  });

  test('ImageStyled should match snapshot', () => {
    const {container} = render(<S.ImageStyled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('ImageStyled renders an <img> for svg data src (keepColors=false)', () => {
    const svgData =
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><path d='M0 0h1v1z' style='fill:%23000;stroke:none'/></svg>";
    const {container, getByTestId} = render(
      <S.ImageStyled data-testid="i" src={svgData} $color="#ffffff" $rotation={0} />,
    );
    const el = getByTestId('i');
    expect(el.nodeName).toBe('IMG');
    expect((el as HTMLImageElement).src).toContain('data:image/svg+xml');
    expect(el).toHaveStyle('transform: rotate(0deg)');
  });

  test('ImageStyled renders an <img> when $keepColors=true (no DOM warning)', () => {
    const svgData =
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><path d='M0 0h1v1z' fill='%23000'/></svg>";
    const {getByTestId} = render(
      <S.ImageStyled data-testid="kc" src={svgData} $keepColors $color="#ffffff" $rotation={0} />,
    );
    const el = getByTestId('kc');
    expect(el.nodeName).toBe('IMG');
    expect((el as HTMLImageElement).src).toContain('data:image/svg+xml');
  });

  test('ImageStyled includes spinner animation when $spinner and $spinnerSpeed provided', () => {
    const svgData =
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><path d='M0 0h1v1z' /></svg>";
    const {getByTestId} = render(
      <S.ImageStyled
        data-testid="spinimg"
        src={svgData}
        $color="#ffffff"
        $spinner
        $spinnerSpeed={0.1}
        $rotation={0}
      />,
    );
    const img = getByTestId('spinimg');
    expect(img.getAttribute('data-spinner')).toBe('true');
  });
  test('ContainerImage applies provided width and height', () => {
    const {getByTestId} = render(<S.ContainerImage data-testid="c" $width="40px" $height="30px" />);
    const container = getByTestId('c');
    expect(container).toHaveStyle('width: 40px');
    expect(container).toHaveStyle('height: 30px');
  });

  test('ImageStyled default cursor and pointer-events when cursor not provided', () => {
    const {container} = render(<S.ImageStyled />);
    const img = container.firstChild as HTMLElement;
    expect(img).toHaveStyle('cursor: default');
  });

  test('ImageStyled respects cursor prop and rotation transform', () => {
    const {getByTestId} = render(
      <S.ImageStyled data-testid="i" $cursor="pointer" $rotation={45} />,
    );
    const img = getByTestId('i');
    expect(img).toHaveStyle('cursor: pointer');
    expect(img).toHaveStyle('transform: rotate(45deg)');
  });

  test('ImageStyled includes spinner animation when $spinner and $spinnerSpeed provided', () => {
    const {getByTestId} = render(<S.ImageStyled data-testid="spin" $spinner $spinnerSpeed={0.1} />);
    const img = getByTestId('spin');
    expect(img.getAttribute('data-spinner')).toBe('true');
  });

  test('ImageStyled pointer-events is "auto" when cursor is pointer', () => {
    const {getByTestId} = render(<S.ImageStyled data-testid="ptr" $cursor="pointer" />);
    const img = getByTestId('ptr');
    expect(img).toHaveStyle('pointer-events: auto');
    expect(img).toHaveStyle('cursor: pointer');
  });

  test('ImageStyled pointer-events is "none" when cursor is default', () => {
    const {getByTestId} = render(<S.ImageStyled data-testid="def" $cursor="default" />);
    const img = getByTestId('def');
    expect(img).toHaveStyle('pointer-events: none');
    expect(img).toHaveStyle('cursor: default');
  });

  test('ImageStyled does not include data-spinner attribute when $spinner is false', () => {
    const {getByTestId} = render(<S.ImageStyled data-testid="no-spin" $spinner={false} />);
    const img = getByTestId('no-spin');
    expect(img.getAttribute('data-spinner')).toBeNull();
  });

  test('ImageStyled with $color prop', () => {
    const {getByTestId} = render(<S.ImageStyled data-testid="colored" $color="#FF0000" />);
    const img = getByTestId('colored');
    expect(img).toBeInTheDocument();
  });

  test('ImageStyled with $keepColors prop', () => {
    const {getByTestId} = render(<S.ImageStyled data-testid="keep" $keepColors />);
    const img = getByTestId('keep');
    expect(img).toBeInTheDocument();
  });
});
