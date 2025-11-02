import styled from 'styled-components';
import {colors} from 'resources/colors';
import {margin} from 'resources/margins';
import {Text} from 'components/ui/text';

export interface ExtraProps {
  $themeDark?: boolean;
}

export const StatsContainer = styled.section<ExtraProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 80px 120px;
  background-color: ${({$themeDark}) => ($themeDark ? colors.background06 : colors.background07)};
  border-top: 1px solid ${({$themeDark}) => ($themeDark ? colors.gunmetal : colors.neutralLight)};
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${margin.small}px;
`;

export const StatNumber = styled(Text).attrs<ExtraProps>(({$themeDark}) => ({
  type: 'h2',
  size: 30,
  weight: 'bold',
  color: $themeDark ? colors.neutralXLight : colors.black,
}))<ExtraProps>`
  margin: 0;
`;

export const StatLabel = styled(Text).attrs<ExtraProps>(({$themeDark}) => ({
  size: 16,
  color: $themeDark ? colors.grayLight : colors.darkerCadetGrey,
}))<ExtraProps>`
  margin: 0;
  text-align: center;
`;
