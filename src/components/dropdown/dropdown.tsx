import React, {useState, useEffect, useMemo, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {languages, namespaces} from 'utils/i18n/i18n.constants';
import {useTheme} from 'context/ThemeContext';
import FlagBrasilSVG from 'assets/icons/iFlag-Brasil-active.svg';
import FlagEUASVG from 'assets/icons/iFlag-USA-active.svg';
import FlagFranceSVG from 'assets/icons/iFlag-France-active.svg';
import * as S from './dropdown.styles';

interface IOption {
  testId: string;
  icon: React.ElementType;
  label: () => string;
  abbreviation: string;
}

export const Dropdown = () => {
  const {theme} = useTheme();
  const {t, i18n} = useTranslation(namespaces.components.dropdown);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<IOption | null>(null);
  const [activeOption, setActiveOption] = useState<IOption | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = useMemo(
    () => [
      {
        testId: 'idioma-portugues',
        abbreviation: languages.pt,
        icon: FlagBrasilSVG,
        label: () => t('portuguese'),
      },
      {
        testId: 'idioma-ingles',
        abbreviation: languages.en,
        icon: FlagEUASVG,
        label: () => t('english'),
      },
      {
        testId: 'idioma-frances',
        abbreviation: languages.fr,
        icon: FlagFranceSVG,
        label: () => t('french'),
      },
    ],
    [t],
  );

  useEffect(() => {
    const resolvedLanguage = i18n.resolvedLanguage;

    const initialOption = options.find(option => {
      if (resolvedLanguage === 'pt') return option.testId === 'idioma-portugues';
      if (resolvedLanguage === 'en') return option.testId === 'idioma-ingles';
      if (resolvedLanguage === 'fr') return option.testId === 'idioma-frances';
      return null;
    });

    if (initialOption) {
      setSelectedOption(initialOption);
      setActiveOption(initialOption);
    }
  }, [i18n.resolvedLanguage, options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    globalThis.addEventListener('mousedown', handleClickOutside);
    return () => {
      globalThis.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelectClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleOptionClick = (option: IOption) => {
    setSelectedOption(option);
    setActiveOption(option);
    i18n.changeLanguage(option.abbreviation);
    setIsOpen(false);
  };

  return (
    <S.DropdownContainer ref={dropdownRef}>
      <S.Select
        data-testid="dropdown-select"
        $theme={theme}
        $clicked={isOpen}
        onClick={handleSelectClick}>
        <S.Selected>
          {selectedOption && (
            <S.IconGlobe
              data-testid={`selected-${selectedOption.testId}`}
              $clicked={isOpen}
              $theme={theme}
            />
          )}
          <S.Texto $theme={!theme} $clicked={isOpen}>
            {selectedOption ? selectedOption.abbreviation.toUpperCase() : t('select')}
          </S.Texto>
        </S.Selected>
      </S.Select>
      <S.Menu data-testid="dropdown-menu" $theme={theme} $open={isOpen}>
        {options.map(option => (
          <S.MenuItem
            key={option.testId}
            $active={activeOption === option}
            $theme={theme}
            onClick={() => handleOptionClick(option)}
            data-testid={option.testId}>
            <S.ContainerOption>
              <S.Flag icon={option.icon} data-testid={`flag-${option.testId}`} />
              <S.Texto $theme={!theme} $active={activeOption === option}>
                {option.label()}
              </S.Texto>
            </S.ContainerOption>
          </S.MenuItem>
        ))}
      </S.Menu>
    </S.DropdownContainer>
  );
};
