import styled, {keyframes, css} from 'styled-components';

interface ExtraProps {
  $color?: string;
  $keepColors?: boolean;
  $height?: string;
  $width?: string;
  $cursor?: 'default' | 'pointer';
  $rotation?: number;
  $spinner?: boolean;
  $spinnerSpeed?: number;
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const spinnerAnimation = (velocidade: number) => css`
  animation: ${spin} infinite ${velocidade}s linear;
`;

export const ContainerImage = styled.div<ExtraProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({$width}) => $width};
  height: ${({$height}) => $height};
  box-sizing: border-box;
`;

export const ImageStyled = styled.img.attrs(
  (props: any) =>
    ({
      'data-spinner': props.$spinner ? 'true' : undefined,
    }) as any,
)<ExtraProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${({$cursor}) => ($cursor === 'default' ? 'none' : 'auto')};
  cursor: ${({$cursor}) => $cursor ?? 'default'};
  transform: rotate(${({$rotation = 0}) => $rotation}deg);
  ${({$spinner, $spinnerSpeed}) => $spinner && $spinnerSpeed && spinnerAnimation($spinnerSpeed)}
`;
