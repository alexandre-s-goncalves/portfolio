import {colors} from 'resources/colors';
import styled from 'styled-components';

export interface ExtraProps {
  $backgroundblack: boolean;
}

export const WebRoutesContainer = styled.main<ExtraProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-color: ${({$backgroundblack}) =>
    $backgroundblack ? colors.background05 : colors.background01};
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;
