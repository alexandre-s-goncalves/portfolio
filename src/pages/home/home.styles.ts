import styled from 'styled-components';
import {Button} from 'components/ui/button';
import {Text} from 'components/ui/text';
import {Icon} from 'components/icon';
import {colors} from 'resources/colors';
import {margin} from 'resources/margins';
import ArrowSVG from 'assets/icons/iArrow.svg';

interface ThemeProps {
  $themeDark?: boolean;
}

export const ContactButton = styled(Button).attrs<ThemeProps>(({$themeDark}) => ({
  $hoverBackgroundColor: colors.background03,
  textProps: {
    color: $themeDark ? colors.white : colors.darkContent,
  },
}))`
  background-color: transparent;
  border: 1px solid ${colors.neutralLight};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${margin.small}px;
  margin-bottom: ${margin.large}px;
`;

export const Description = styled(Text).attrs({
  size: 18,
  lineHeight: 22,
  color: colors.gray,
})`
  margin: ${margin.xlarge}px 0;
  width: 700px;
  text-align: center;
`;

export const EmailIcon = styled(Icon).attrs<ThemeProps>(({$themeDark}) => ({
  width: 32,
  height: 32,
  color: $themeDark ? colors.grayLight : colors.black,
}))``;

export const GithubIcon = styled(Icon).attrs<ThemeProps>(({$themeDark}) => ({
  width: 24,
  height: 24,
  color: $themeDark ? colors.grayLight : colors.black,
}))<ThemeProps>``;

export const Greeting = styled(Text).attrs({
  size: 18,
  lineHeight: 26,
  color: colors.gray,
})`
  margin-bottom: ${margin.small}px;
`;

export const LinkedinIcon = styled(Icon).attrs({
  width: 24,
  height: 24,
})``;

export const Name = styled(Text).attrs<ThemeProps>(({$themeDark}) => ({
  type: 'h1',
  size: 40,
  lineHeight: 40,
  weight: 'bold',
  color: $themeDark ? colors.white : colors.darkContent,
}))`
  margin-bottom: ${margin.small}px;
`;

export const Role = styled(Text).attrs({
  size: 26,
  lineHeight: 34,
  color: colors.gray,
})``;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${margin.small}px;
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 6px 12px;
  background-color: ${colors.neutralXLight};
`;

export const TagText = styled(Text).attrs({
  size: 12,
  lineHeight: 16,
  weight: 'semi-bold',
  color: colors.neutralDark,
})``;

export const ViewProjectsButton = styled(Button).attrs<ThemeProps>(({$themeDark}) => ({
  icon: ArrowSVG,
  iconPosition: 'right',
  textProps: {
    color: $themeDark ? colors.darkContent : colors.white,
  },
}))<ThemeProps>`
  background-color: ${({$themeDark}) => ($themeDark ? colors.white : colors.darkContent)};
`;
