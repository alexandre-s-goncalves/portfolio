import React from 'react';
import {useTheme} from 'context/ThemeContext';
import {useTranslation} from 'react-i18next';
import {useNavigate, useLocation} from 'react-router-dom';
import {namespaces} from 'utils/i18n/i18n.constants';
import {Dropdown} from 'components/dropdown';
import MoonSVG from 'assets/icons/iMoon.svg';
import SunSVG from 'assets/icons/iSun.svg';
import LogoDarkSVG from 'assets/image/logo-dark.svg';
import LogoClearSVG from 'assets/image/logo-clear.svg';
import * as S from './header.styles';

export const Header = () => {
  const {themeDark, handleToggle} = useTheme();
  const {t} = useTranslation(namespaces.pages.header);
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    {name: t('home'), href: '/'},
    {name: t('skills'), href: '/skills'},
    {name: t('projects'), href: '/projects'},
    {name: t('about'), href: '/about'},
  ];

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  const isHome = location.pathname === '/';

  const handleLogoClick = () => {
    if (!isHome) {
      navigate('/');
    }
  };

  return (
    <S.HeaderContainer $themeDark={themeDark}>
      <S.LogoButton
        testId={themeDark ? 'logo-clear' : 'logo-dark'}
        icon={themeDark ? LogoClearSVG : LogoDarkSVG}
        $isActivated={isHome}
        onClick={handleLogoClick}
        aria-label="Navigate to home"
      />
      <S.Nav>
        {navigation.map(item => (
          <S.NavLink
            key={item.href}
            to={item.href}
            data-testid={`navlink-${item.name.toLowerCase()}`}>
            <S.TextHeader $themeDark={themeDark} $isActivated={isActive(item.href)}>
              {item.name}
            </S.TextHeader>
          </S.NavLink>
        ))}
      </S.Nav>
      <S.ButtonsContainer>
        <Dropdown />
        <S.ThemeToggleButton
          testId={themeDark ? 'theme-toggle-sun' : 'theme-toggle-moon'}
          icon={themeDark ? SunSVG : MoonSVG}
          $themeDark={themeDark}
          onClick={handleToggle}
        />
      </S.ButtonsContainer>
    </S.HeaderContainer>
  );
};
