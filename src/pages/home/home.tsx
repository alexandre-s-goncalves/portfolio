import React from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'context/ThemeContext';
import {namespaces} from 'utils/i18n/i18n.constants';
import EmailSVG from 'assets/icons/iEmail.svg';
import GithubSVG from 'assets/icons/iGithub.svg';
import LinkedinSVG from 'assets/icons/iLinkedin.svg';
import * as S from './home.styles';

export const Home = () => {
  const {t: tFooter} = useTranslation(namespaces.pages.footer);
  const {t} = useTranslation(namespaces.pages.home);
  const {themeDark} = useTheme();
  const tags = ['React.js', 'TypeScript', 'React Native', '.NET', 'Java'];

  return (
    <S.Container data-testid="home-page">
      <S.Greeting>{t('greeting')}</S.Greeting>
      <S.Name $themeDark={themeDark}>{t('name')}</S.Name>
      <S.Role>{t('role')}</S.Role>
      <S.Description>{t('description')}</S.Description>
      <S.ContentWrapper>
        {tags.map(tag => (
          <TagItem key={tag} tag={tag} />
        ))}
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.ViewProjectsButton $themeDark={themeDark}>{t('view_projects')}</S.ViewProjectsButton>
        <S.ContactButton $themeDark={themeDark}>{t('contact')}</S.ContactButton>
      </S.ContentWrapper>
      <S.SocialLinks>
        <S.SocialLink
          href={tFooter('github')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={tFooter('github')}>
          <S.GithubIcon $themeDark={themeDark} icon={GithubSVG} />
        </S.SocialLink>
        <S.SocialLink
          href={tFooter('linkedin')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={tFooter('linkedin')}>
          <S.LinkedinIcon icon={LinkedinSVG} />
        </S.SocialLink>
        <S.SocialLink href={`mailto:${tFooter('email')}`} aria-label="Send email">
          <S.EmailIcon $themeDark={themeDark} icon={EmailSVG} />
        </S.SocialLink>
      </S.SocialLinks>
    </S.Container>
  );
};

const TagItem = ({tag}: {tag: string}) => {
  return (
    <S.Tag>
      <S.TagText>{tag}</S.TagText>
    </S.Tag>
  );
};
