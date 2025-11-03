import React from 'react';
import {ContainerImage, ImageStyled} from './image.styles';

interface ImageProps {
  testId?: string;
  src: string;
  alt?: string;
  cursor?: 'default' | 'pointer';
  height?: number;
  width?: number;
  rotation?: number;
  spinner?: boolean;
  spinnerSpeed?: number;
  color?: string;
  keepColors?: boolean;
  borderRadius?: string;
}

export const Image = ({
  testId,
  src,
  alt,
  cursor,
  height = 32,
  width = 32,
  rotation = 0,
  spinner = false,
  spinnerSpeed = 0,
  color,
  keepColors = false,
  borderRadius,
  ...props
}: Readonly<ImageProps>) => {
  const containerStyles: React.CSSProperties = {
    minWidth: width,
    minHeight: height,
    maxWidth: width,
    maxHeight: height,
  };

  return (
    <ContainerImage
      data-testid="container-image"
      $width={`${width}px`}
      $height={`${height}px`}
      $borderRadius={borderRadius}
      style={containerStyles}
      {...props}>
      <ImageStyled
        data-testid={testId ? `${testId}-img` : 'img'}
        src={src}
        alt={alt}
        $cursor={cursor}
        $rotation={rotation}
        $spinner={spinner}
        $spinnerSpeed={spinnerSpeed}
        $color={color}
        $keepColors={keepColors}
        $borderRadius={borderRadius}
      />
    </ContainerImage>
  );
};
