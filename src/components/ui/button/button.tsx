import React from 'react';
import {TextProps} from 'components/ui/text/Text.styles';
import * as S from './button.styles';

export interface ButtonProps {
  children: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  textProps?: Partial<TextProps>;
  className?: string;
  ariaLabel?: string;
}

export const Button = ({
  children,
  icon,
  iconPosition = 'right',
  onClick,
  disabled = false,
  type = 'button',
  textProps,
  className,
  ariaLabel,
  ...props
}: ButtonProps) => {
  const iconColor = textProps?.color;

  return (
    <S.ButtonContainer
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={className}
      aria-label={ariaLabel || children}
      {...props}>
      {icon && iconPosition === 'left' && <S.ButtonIcon icon={icon} color={iconColor} />}
      <S.ButtonText {...textProps}>{children}</S.ButtonText>
      {icon && iconPosition === 'right' && <S.ButtonIcon icon={icon} color={iconColor} />}
    </S.ButtonContainer>
  );
};
