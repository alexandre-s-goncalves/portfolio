import {colors} from 'resources/colors';
import styled from 'styled-components';

export interface ExtraProps {
  $backgroundblack: boolean;
}

export const WebRoutesContainer = styled.main<ExtraProps>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({$backgroundblack}) =>
    $backgroundblack ? colors.black : colors.background01};
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 116px;
  margin-bottom: 70px;
  overflow-y: auto;
`;
