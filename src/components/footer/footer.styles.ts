import styled from 'styled-components';
import {colors} from 'resources/colors';
import {margin} from 'resources/margins';
import {Text} from 'components/ui/text/Text';
import {Icon} from 'components/icon';
import HeartSVG from 'assets/icons/iHeart.svg';

interface ThemeProps {
  $themeDark?: boolean;
}

export const FooterContainer = styled.footer<ThemeProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({$themeDark}) => ($themeDark ? colors.background05 : colors.background01)};
  padding: ${margin.large}px 210px;
  border-top: 1px solid ${({$themeDark}) => ($themeDark ? colors.darkerGray : colors.lighterGray)};
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div<ThemeProps>`
  display: flex;
  gap: 150px;
  width: 100%;
  padding-bottom: ${margin.large}px;
  border-bottom: 1px solid
    ${({$themeDark}) => ($themeDark ? colors.darkerGray : colors.lighterGray)};
`;

export const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  gap: ${margin.small}px;
`;

export const BrandTitle = styled(Text).attrs<ThemeProps>(({$themeDark}) => ({
  type: 'h2',
  size: 18,
  lineHeight: 26,
  color: $themeDark ? colors.neutralXLight : colors.darkContent,
}))<ThemeProps>`
  display: flex;
  align-items: center;
  gap: ${margin.small}px;
`;

export const BioText = styled(Text).attrs<ThemeProps>(({$themeDark}) => ({
  size: 16,
  lineHeight: 24,
  color: $themeDark ? colors.grayLight : colors.gray,
}))<ThemeProps>``;

export const ContactSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${margin.xxsmall}px;
`;

export const ContactTitle = styled(Text).attrs<ThemeProps>(({$themeDark}) => ({
  size: 16,
  lineHeight: 24,
  weight: 'semi-bold',
  color: $themeDark ? colors.neutralXLight : colors.darkContent,
}))`
  margin-bottom: ${margin.xxsmall}px;
`;

export const ContactText = styled(Text).attrs<ThemeProps>(({$themeDark}) => ({
  size: 16,
  lineHeight: 24,
  color: $themeDark ? colors.grayLight : colors.gray,
}))<ThemeProps>``;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${margin.medium}px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const LogoIcon = styled(Icon).attrs({
  width: 32,
  height: 32,
  fill: colors.black,
})``;

export const HeartIcon = styled(Icon).attrs({
  icon: HeartSVG,
  width: 24,
  height: 24,
  color: colors.red,
})``;

export const GithubIcon = styled(Icon).attrs<ThemeProps>(({$themeDark}) => ({
  width: 24,
  height: 24,
  color: $themeDark ? colors.grayLight : colors.black,
}))<ThemeProps>``;

export const LinkedinIcon = styled(Icon).attrs({
  width: 24,
  height: 24,
})``;

export const EmailIcon = styled(Icon).attrs<ThemeProps>(({$themeDark}) => ({
  width: 32,
  height: 32,
  color: $themeDark ? colors.grayLight : colors.black,
}))``;

export const CopyrightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${margin.medium}px 0;
`;

export const CopyrightText = styled(Text).attrs<ThemeProps>(({$themeDark}) => ({
  size: 14,
  lineHeight: 20,
  weight: 'semi-bold',
  color: $themeDark ? colors.grayLight : colors.gray,
}))`
  display: flex;
  align-items: center;
  gap: ${margin.xxsmall}px;
`;
