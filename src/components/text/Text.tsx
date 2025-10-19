import React from 'react';
import {TextStyled, TextProps} from './Text.styles';

export function Text(props: TextProps) {
  const {size, lineHeight, marginTop, toUpper, fontWeight, type = 'p', ...rest} = props;

  return (
    <TextStyled
      as={type}
      $size={size}
      $lineHeight={lineHeight}
      $marginTop={marginTop}
      $toUpper={toUpper}
      $fontWeight={fontWeight}
      {...rest}
    />
  );
}
