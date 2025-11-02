import React from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'context/ThemeContext';
import {namespaces} from 'utils/i18n/i18n.constants';
import * as S from './stats.styles';

const STATS_DATA = {
  projects: 10,
  experience: 3,
  technologies: 15,
};

export const Stats: React.FC = () => {
  const {themeDark} = useTheme();
  const {t} = useTranslation(namespaces.components.stats);

  return (
    <S.StatsContainer $themeDark={themeDark}>
      <S.StatItem>
        <S.StatNumber $themeDark={themeDark}>{STATS_DATA.projects}+</S.StatNumber>
        <S.StatLabel $themeDark={themeDark}>{t('projects')}</S.StatLabel>
      </S.StatItem>

      <S.StatItem>
        <S.StatNumber $themeDark={themeDark}>{STATS_DATA.experience}+</S.StatNumber>
        <S.StatLabel $themeDark={themeDark}>{t('experience')}</S.StatLabel>
      </S.StatItem>

      <S.StatItem>
        <S.StatNumber $themeDark={themeDark}>{STATS_DATA.technologies}+</S.StatNumber>
        <S.StatLabel $themeDark={themeDark}>{t('technologies')}</S.StatLabel>
      </S.StatItem>
    </S.StatsContainer>
  );
};
