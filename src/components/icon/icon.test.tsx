import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import * as S from './icon';

describe('Icon component', () => {
  test('renders provided SVG component and forwards basic props', () => {
    const MockSvg: React.FC<React.SVGProps<SVGSVGElement>> = props => (
      <svg data-testid="mock-svg" {...props} />
    );

    const {getByTestId} = render(
      <S.Icon
        icon={MockSvg}
        color="#123456"
        width={24}
        height={16}
        rotation={45}
        aria-label="icon"
      />,
    );

    const svg = getByTestId('mock-svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('fill', '#123456');
    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '16');
    expect(svg).toHaveStyle('transform: rotate(45deg)');
    expect(svg).toHaveAttribute('aria-label', 'icon');
  });

  test('returns null when no icon prop is provided', () => {
    const {container} = render(<S.Icon />);
    expect(container.firstChild).toBeNull();
  });

  test('forwards additional props to the SVG component', () => {
    const MockSvg: React.FC<React.SVGProps<SVGSVGElement>> = props => (
      <svg data-testid="forward-svg" {...props} />
    );

    const {getByTestId} = render(
      <S.Icon icon={MockSvg} color="#000" width={10} height={10} data-custom="custom" />,
    );

    const svg = getByTestId('forward-svg');
    expect(svg).toHaveAttribute('data-custom', 'custom');
  });
});
