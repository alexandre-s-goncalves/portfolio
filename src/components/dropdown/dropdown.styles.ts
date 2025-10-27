import styled from 'styled-components';
import {colors} from 'resources/colors';
import {margin} from 'resources/margins';
import {Text} from 'components/ui/text';
import {Icon} from 'components/icon';
import GlobeSVG from 'assets/icons/iGlobe.svg';

interface ExtraProps {
  $open?: boolean;
  $active?: boolean;
  $clicked?: boolean;
  $rotate?: boolean;
  $theme?: boolean;
}

export const ContainerOption = styled.div`
  display: flex;
  align-items: center;
  gap: ${margin.xsmall}px;
`;

export const DropdownContainer = styled.div`
  position: relative;
  margin: ${margin.xsmall}px;
`;

export const Flag = styled(Icon).attrs<ExtraProps>(({$clicked}) => ({
  height: margin.medium,
  width: margin.medium,
  cursor: $clicked ? 'default' : 'pointer',
}))``;

export const IconGlobe = styled(Icon).attrs<ExtraProps>(({$clicked, $theme}) => ({
  icon: GlobeSVG,
  color: $theme ? colors.background01 : colors.black,
  height: margin.medium,
  width: margin.medium,
  cursor: $clicked ? 'default' : 'pointer',
}))``;

export const Menu = styled.ul<ExtraProps>`
  position: absolute;
  background: ${({$theme}) => ($theme ? colors.background05 : colors.background01)};
  border: 1px solid ${({$theme}) => ($theme ? colors.charcoal : colors.neutralLight)};
  box-shadow: 0 ${margin.xsmall}px ${margin.small}px rgba(0, 0, 0, 0.2);
  border-radius: ${margin.xsmall}px;
  color: ${colors.cadetGrey};
  top: ${margin.xxlarge}px;
  left: 100%;
  min-width: 150px;
  transform: translateX(-50%);
  opacity: ${({$open}) => ($open ? 1 : 0)};
  transition: opacity 0.2s;
  display: ${({$open}) => ($open ? 'block' : 'none')};
  z-index: 1;
`;

export const MenuItem = styled.li<ExtraProps>`
  display: flex;
  padding: ${margin.xsmall}px;
  margin: ${margin.xxsmall}px;
  border-radius: ${margin.xsmall}px;
  cursor: ${({$active}) => ($active ? 'default' : 'pointer')};
  background: ${({$active, $theme}) =>
    $theme
      ? $active
        ? colors.raisinBlack
        : 'transparent'
      : $active
        ? colors.background03
        : 'transparent'};

  &:hover {
    background: ${({$theme}) => ($theme ? colors.raisinBlack : colors.background03)};
  }
`;

export const Select = styled.div<ExtraProps>`
  background: ${({$theme}) => ($theme ? colors.background05 : colors.background01)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${margin.xlarge}px;
  border-radius: ${margin.xsmall}px;
  padding: 8px 12px;
  cursor: ${({$clicked}) => ($clicked ? 'default' : 'pointer')};

  &:hover {
    background: ${({$theme, $clicked}) =>
      $clicked
        ? $theme
          ? colors.background05
          : colors.background01
        : $theme
          ? colors.gunmetal
          : colors.background03};
  }
`;

export const Selected = styled.span`
  display: flex;
  align-items: center;
  gap: ${margin.xsmall}px;
`;

export const Texto = styled(Text).attrs<ExtraProps>(({$theme, $active, $clicked}) => ({
  color: $theme ? colors.black : colors.background01,
  cursor: $active || $clicked ? 'default' : 'pointer',
}))``;
