import React from 'react';
import {Icon, IconProps} from 'components/icon';
import {ButtonStyled} from './iconButton.styles';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ElementType;
  iconColor?: string;
  iconRotation?: number;
  iconWidth?: number;
  iconHeight?: number;
  testId?: string;
}

export const IconButton = ({
  icon,
  iconColor,
  iconRotation = 0,
  iconWidth = 24,
  iconHeight = 24,
  testId,
  ...props
}: Readonly<IconButtonProps>) => {
  const iconProps: IconProps = {
    icon,
    color: iconColor,
    rotation: iconRotation,
    width: iconWidth,
    height: iconHeight,
    cursor: 'inherit',
  };

  return (
    <ButtonStyled data-testid={testId || 'icon-button'} {...props}>
      <Icon {...iconProps} />
    </ButtonStyled>
  );
};
