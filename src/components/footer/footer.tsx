import React from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'context/ThemeContext';
import {namespaces} from 'utils/i18n/i18n.constants';
import GithubSVG from 'assets/icons/iGithub.svg';
import LinkedinSVG from 'assets/icons/iLinkedin.svg';
import EmailSVG from 'assets/icons/iEmail.svg';
import LogoDarkSVG from 'assets/image/logo-dark.svg';
import LogoClearSVG from 'assets/image/logo-clear.svg';
import * as S from './footer.styles';

export const Footer = () => {
  const {t} = useTranslation(namespaces.pages.footer);
  const {themeDark} = useTheme();

  return (
    <S.FooterContainer $themeDark={themeDark}>
      <S.ContentWrapper $themeDark={themeDark}>
        <S.InfoSection>
          <S.BrandTitle $themeDark={themeDark}>
            <S.LogoIcon
              data-testid={themeDark ? 'logo-clear' : 'logo-dark'}
              icon={themeDark ? LogoClearSVG : LogoDarkSVG}
            />
            {t('name')}
          </S.BrandTitle>
          <S.BioText $themeDark={themeDark}>{t('bio')}</S.BioText>
          <S.SocialLinks>
            <S.SocialLink
              href={t('github')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('github')}>
              <S.GithubIcon $themeDark={themeDark} icon={GithubSVG} />
            </S.SocialLink>
            <S.SocialLink
              href={t('linkedin')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('linkedin')}>
              <S.LinkedinIcon icon={LinkedinSVG} />
            </S.SocialLink>
            <S.SocialLink href={`mailto:${t('email')}`} aria-label="Send email">
              <S.EmailIcon $themeDark={themeDark} icon={EmailSVG} />
            </S.SocialLink>
          </S.SocialLinks>
        </S.InfoSection>
        <S.ContactSection>
          <S.ContactTitle $themeDark={themeDark}>{t('contact')}</S.ContactTitle>
          <S.ContactText $themeDark={themeDark}>{t('email')}</S.ContactText>
          <S.ContactText $themeDark={themeDark}>{t('phone')}</S.ContactText>
          <S.ContactText $themeDark={themeDark}>{t('location')}</S.ContactText>
        </S.ContactSection>
      </S.ContentWrapper>
      <S.CopyrightContainer>
        <S.CopyrightText $themeDark={themeDark}>
          © 2025 {t('name')} {t('rights')}
        </S.CopyrightText>
        <S.CopyrightText $themeDark={themeDark}>
          {t('built_with')} <S.HeartIcon data-testid="heart-icon" /> React
        </S.CopyrightText>
      </S.CopyrightContainer>
    </S.FooterContainer>
  );
};
