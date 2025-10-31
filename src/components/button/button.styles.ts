import styled from 'styled-components';
import {colors} from 'resources/colors';
import {margin} from 'resources/margins';
import {Text} from 'components/ui/text/Text';
import {Icon} from 'components/icon';

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${margin.xsmall}px;
  padding: ${margin.xsmall}px ${margin.medium}px;
  border-radius: 8px;
  border: none;
  height: 40px;
  transition: all 0.2s ease;
  background-color: ${colors.lightgray};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    cursor: default;

    &:hover {
      opacity: 1;
    }
  }
`;

export const ButtonIcon = styled(Icon).attrs(props => ({
  width: props.width || 24,
  height: props.height || 24,
  color: props.color || colors.white,
}))``;

export const ButtonText = styled(Text).attrs(props => ({
  size: props.size || 14,
  weight: props.weight || 'semi-bold',
  color: props.color || colors.white,
}))`
  white-space: nowrap;
`;
