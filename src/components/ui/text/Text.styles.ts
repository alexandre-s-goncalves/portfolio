import styled, {css} from 'styled-components';
import {colors} from 'resources/colors';
import fonts from 'resources/fonts';
import texts from 'resources/texts';

export type TextProps = {
  id?: string;
  type?: 'p' | 'h1' | 'h2' | 'h3' | 'h4';
  color?: string;
  size?: 12 | 14 | 16 | 18 | 20 | 24;
  lineHeight?: 18 | 20 | 22 | 24 | 26 | 34;
  marginTop?: number;
  children?: string | React.ReactNode;
  weight?: 'bold' | 'semi-bold' | 'medium';
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  toUpper?: boolean;
  cursor?: 'default' | 'pointer' | 'text';
};

interface Props {
  $size?: number;
  $lineHeight?: number;
  $marginTop?: number;
  $toUpper?: boolean;
  $fontWeight?: number;
  $weight?: 'bold' | 'semi-bold' | 'medium';
  $color?: string;
  $cursor?: 'default' | 'pointer' | 'text';
}

export const TextStyled = styled.p<Props & TextProps>`
  font-size: ${({$size}) => $size ?? texts.tamanho.xxsmall}px;
  font-family: ${({$weight}) => ($weight === 'bold' ? fonts.InterBold : fonts.InterRegular)};
  color: ${({$color}) => $color ?? colors.background01};
  margin-top: ${({$marginTop}) => $marginTop ?? 0}px;
  font-weight: ${({$fontWeight}) => $fontWeight ?? 'normal'};
  text-transform: ${({$toUpper}) => ($toUpper ? 'uppercase' : 'none')};
  cursor: ${({$cursor}) => $cursor ?? 'text'};

  ${({$lineHeight}) =>
    $lineHeight &&
    css`
      line-height: ${$lineHeight}px;
    `}
`;
