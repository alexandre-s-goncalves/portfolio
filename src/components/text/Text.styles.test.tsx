import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import {colors} from 'resources/colors';
import fonts from 'resources/fonts';
import texts from 'resources/texts';
import {TextStyled} from './Text.styles';

describe('TextStyled Component', () => {
  test('should match the snapshot', () => {
    const {container} = render(<TextStyled>Test</TextStyled>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`should have color equal to "${colors.black}" WHEN the color prop is "${colors.black}"`, () => {
    const {container} = render(<TextStyled color={colors.black}>Test</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('color', colors.black);
  });

  test('should have the default color equal to "colors.background01" WHEN the color prop is not provided', () => {
    const {container} = render(<TextStyled>Test</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('color', colors.background01);
  });

  test('should have font-size equal to "14px" WHEN the $size prop is "14"', () => {
    const {container} = render(<TextStyled $size={14}>Test</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('font-size', '14px');
  });

  test('should have the default font-size equal to texts.tamanho.xxsmall WHEN the $size prop is not provided', () => {
    const {container} = render(<TextStyled>Test</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('font-size', `${texts.tamanho.xxsmall}px`);
  });

  test('should have margin-top equal to "10px" WHEN the $marginTop prop is "10"', () => {
    const {container} = render(<TextStyled $marginTop={10}>Test</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('margin-top', '10px');
  });

  test('should have default margin-top equal to "0px" WHEN the $marginTop prop is not provided', () => {
    const {container} = render(<TextStyled>Test</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('margin-top', '0px');
  });

  test('should have font-family equal to "AvertaStd-Bold" WHEN the weight prop is "bold"', () => {
    const {container} = render(<TextStyled weight="bold">Test</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('font-family', fonts.avertaBold);
  });

  test('should have font-family equal to "AvertaStd-Regular" WHEN the weight prop is not provided', () => {
    const {container} = render(<TextStyled>Test</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('font-family', fonts.avertaRegular);
  });

  test('should have text-transform equal to "uppercase" WHEN the $toUpper prop is true', () => {
    const {container} = render(<TextStyled $toUpper={true}>Test</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('text-transform', 'uppercase');
  });

  test('should have text-transform equal to "none" WHEN the $toUpper prop is not provided', () => {
    const {container} = render(<TextStyled>Test</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('text-transform', 'none');
  });

  test('should have cursor equal to "pointer" WHEN the cursor prop is "pointer"', () => {
    const {container} = render(<TextStyled cursor="pointer">Test</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('cursor', 'pointer');
  });

  test('should have default cursor equal to "text" WHEN the cursor prop is not provided', () => {
    const {container} = render(<TextStyled>Test</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('cursor', 'text');
  });

  test('should have line-height equal to "20px" WHEN the $lineHeight prop is "20"', () => {
    const {container} = render(<TextStyled $lineHeight={20}>Test</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('line-height', '20px');
  });

  test('should have font-weight equal to "500" WHEN the $fontWeight prop is "500"', () => {
    const {container} = render(<TextStyled $fontWeight={500}>Test</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('font-weight', '500');
  });

  test('should NOT have line-height WHEN the $lineHeight prop is not provided', () => {
    const {container} = render(<TextStyled>Test</TextStyled>);
    expect(container.firstChild).not.toHaveStyleRule('line-height');
  });
});
