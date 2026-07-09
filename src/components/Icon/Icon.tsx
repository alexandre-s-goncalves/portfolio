import React, {ComponentType, SVGProps} from 'react';
import {clsx} from 'clsx';

export interface IconProps extends Omit<
  SVGProps<SVGSVGElement>,
  'size' | 'rotate'
> {
  icon: ComponentType<SVGProps<SVGSVGElement>> | string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  color?: string;
  rotate?: 0 | 45 | 90 | 180 | 'animate-spin';
  alt?: string;
}

const getMaskStyle = (
  isStringIcon: boolean,
  shouldApplyColors: boolean,
  iconInput: string,
  style?: React.CSSProperties,
): React.CSSProperties => {
  if (!isStringIcon) return {};

  if (shouldApplyColors) {
    return {
      maskImage: `url("${iconInput}")`,
      WebkitMaskImage: `url("${iconInput}")`,
      maskSize: 'contain',
      WebkitMaskSize: 'contain',
      maskRepeat: 'no-repeat',
      WebkitMaskRepeat: 'no-repeat',
      maskPosition: 'center',
      WebkitMaskPosition: 'center',
      backgroundColor: 'currentColor',
      width: '100%',
      height: '100%',
      ...style,
    };
  }

  return {
    backgroundImage: `url("${iconInput}")`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    ...style,
  };
};

const getSizeClass = (size: 'sm' | 'md' | 'lg' | 'xl' | number): string => {
  switch (size) {
    case 'sm':
      return 'h-4 w-4';
    case 'lg':
      return 'h-6 w-6';
    case 'xl':
      return 'h-8 w-8';
    case 'md':
    default:
      return 'h-5 w-5';
  }
};

const getRotateClass = (rotate: 0 | 45 | 90 | 180 | 'animate-spin'): string => {
  switch (rotate) {
    case 45:
      return 'rotate-45';
    case 90:
      return 'rotate-90';
    case 180:
      return 'rotate-180';
    case 'animate-spin':
      return 'animate-spin';
    case 0:
    default:
      return 'rotate-0';
  }
};

export const Icon = ({
  icon: IconInput,
  size = 'md',
  color = 'text-slate-600 dark:text-slate-400',
  rotate = 0,
  className,
  style,
  alt,
  ...props
}: IconProps) => {
  const isCustomSize = typeof size === 'number';
  const isStringIcon = typeof IconInput === 'string';
  const shouldApplyColors = color !== 'none';

  const maskStyle = getMaskStyle(
    isStringIcon,
    shouldApplyColors,
    IconInput as string,
    style,
  );

  return (
    <div
      aria-hidden={alt ? undefined : 'true'}
      style={isCustomSize ? {width: size, height: size} : undefined}
      className={clsx(
        'inline-flex items-center justify-center transition-transform duration-200 ease-in-out select-none',
        !isCustomSize && getSizeClass(size),
        shouldApplyColors && color,
        getRotateClass(rotate),
        className,
      )}>
      {isStringIcon ? (
        <div
          style={maskStyle}
          role={alt ? 'img' : undefined}
          aria-label={alt}
        />
      ) : (
        <IconInput
          className="h-full w-full"
          fill={shouldApplyColors ? 'currentColor' : undefined}
          stroke={shouldApplyColors ? 'currentColor' : undefined}
          role={alt ? 'img' : undefined}
          aria-label={alt}
          {...props}>
          {alt && <title>{alt}</title>}
        </IconInput>
      )}
    </div>
  );
};
