import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {colors} from 'resources/colors';
import {Text} from 'components/ui/text';
import {IconButton} from 'components/iconButton';
import {margin} from 'resources/margins';

export interface ExtraProps {
  $themeDark?: boolean;
  $isActivated?: boolean;
}

export const ThemeToggleButton = styled(IconButton).attrs<ExtraProps>(({$themeDark}) => ({
  iconColor: $themeDark ? colors.background01 : colors.black,
  iconWidth: 24,
  iconHeight: 24,
  cursor: 'pointer',
}))`
  background: none;
  padding: ${margin.xsmall}px;
`;

export const LogoButton = styled(IconButton).attrs<ExtraProps>(({$isActivated}) => ({
  iconWidth: 40,
  iconHeight: 40,
}))<ExtraProps>`
  background: transparent;
  cursor: ${({$isActivated}) => ($isActivated ? 'default' : 'pointer')};
  pointer-events: ${({$isActivated}) => ($isActivated ? 'none' : 'auto')};

  &:hover {
    opacity: ${({$isActivated}) => ($isActivated ? 1 : 0.8)};
  }
`;

export const TextHeader = styled(Text).attrs<ExtraProps>(({$themeDark, $isActivated}) => ({
  size: 14,
  type: 'h3',
  color: $isActivated
    ? $themeDark
      ? colors.neutralXLight
      : colors.black
    : $themeDark
      ? colors.grayLight
      : colors.darkerCadetGrey,
  marginTop: 0,
  cursor: $isActivated ? 'default' : 'pointer',
  weight: $isActivated ? 'semi-bold' : 'medium',
}))`
  transition: color 0.3s ease;

  &:hover {
    color: ${({$themeDark}) => ($themeDark ? colors.background01 : colors.black)};
  }
`;

export const HeaderContainer = styled.header<ExtraProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${margin.xsmall}px 120px;
  box-sizing: border-box;
  border-bottom: 1px solid ${({$themeDark}) => ($themeDark ? colors.gunmetal : colors.neutralLight)};
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${margin.large}px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${margin.small}px;
`;
