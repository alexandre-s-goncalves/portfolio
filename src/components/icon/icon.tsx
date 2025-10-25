import React from 'react';
import {colors} from 'resources/colors';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon?: React.ElementType;
  color?: string;
  rotation?: number;
  width?: number;
  height?: number;
}

export const Icon = ({
  icon: Icon,
  color = colors.black,
  rotation = 0,
  height = 32,
  width = height,
  ...props
}: Readonly<IconProps>) => {
  const styles: React.CSSProperties = {
    minWidth: width,
    minHeight: height,
    maxWidth: width,
    maxHeight: height,
  };

  if (rotation !== 0) {
    styles.transform = `rotate(${rotation}deg)`;
  }

  return Icon && <Icon fill={color} width={width} height={height} style={styles} {...props} />;
};
