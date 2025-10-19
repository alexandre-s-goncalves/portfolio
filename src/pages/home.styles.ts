import styled from 'styled-components';
import {Text} from 'components/text';
import {colors} from 'resources/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Title = styled(Text).attrs({
  type: 'h1',
  size: 24,
  weight: 'bold',
  color: colors.neutralDark,
})``;
