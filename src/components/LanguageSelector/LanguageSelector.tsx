import {
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
  ComponentType,
  SVGProps,
} from 'react';
import {clsx} from 'clsx';
import {Icon} from '../Icon';
import {useTranslation} from 'react-i18next';
import {languages, namespaces} from 'i18n';

import GlobeIcon from 'assets/icons/iGlobe.svg';
import FlagBrazil from 'assets/icons/iFlag-Brazil.svg';
import FlagUSA from 'assets/icons/iFlag-USA.svg';
import FlagFrance from 'assets/icons/iFlag-France.svg';
import FlagSpain from 'assets/icons/iFlag-Spain.svg';

export type LanguageCode = 'pt' | 'en' | 'fr' | 'es';

export interface LanguageOption {
  testId: string;
  abbreviation: LanguageCode;
  icon: ComponentType<SVGProps<SVGSVGElement>> | string;
  label: () => string;
  alt: string;
}

export const LanguageSelector = () => {
  const {t, i18n} = useTranslation(namespaces.components.languageSelector);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuItemsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const rawLanguage = i18n.language || 'pt';
  const currentLanguageCode = rawLanguage
    .slice(0, 2)
    .toLowerCase() as LanguageCode;

  const languageOptions = useMemo<LanguageOption[]>(
    () => [
      {
        testId: 'idioma-portugues',
        abbreviation: languages.pt,
        icon: FlagBrazil,
        label: () => t('portuguese'),
        alt: t('altFlagBrazil'),
      },
      {
        testId: 'idioma-ingles',
        abbreviation: languages.en,
        icon: FlagUSA,
        label: () => t('english'),
        alt: t('altFlagEUA'),
      },
      {
        testId: 'idioma-frances',
        abbreviation: languages.fr,
        icon: FlagFrance,
        label: () => t('french'),
        alt: t('altFragFrance'),
      },
      {
        testId: 'idioma-espanhol',
        abbreviation: languages.es,
        icon: FlagSpain,
        label: () => t('spanish'),
        alt: t('spanish'),
      },
    ],
    [t],
  );

  const handleBlur = useCallback((event: React.FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget as Node | null;
    if (!nextTarget || !dropdownRef.current?.contains(nextTarget)) {
      setIsOpen(false);
    }
  }, []);

  const handleExternalClick = useCallback((event: MouseEvent) => {
    if (!dropdownRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  const focusFirstActiveItem = () => {
    const firstActive = menuItemsRef.current.find(
      item => item && !item.disabled,
    );
    firstActive?.focus();
  };

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (!isOpen) return;

      const activeElement = document.activeElement;
      const currentIndex = menuItemsRef.current.findIndex(
        item => item === activeElement,
      );

      if (event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % languageOptions.length;
        menuItemsRef.current[nextIndex]?.focus();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        const prevIndex =
          (currentIndex - 1 + languageOptions.length) % languageOptions.length;
        menuItemsRef.current[prevIndex]?.focus();
      }
    },
    [isOpen, languageOptions.length],
  );

  const handleToggleMenu = () => {
    setIsOpen(prevOpen => !prevOpen);
  };

  useEffect(() => {
    if (!isOpen) return;

    requestAnimationFrame(focusFirstActiveItem);
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleExternalClick);
    return () => {
      document.removeEventListener('mousedown', handleExternalClick);
    };
  }, [handleExternalClick]);

  const handleSelectLanguage = async (code: LanguageCode) => {
    await i18n.changeLanguage(code);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <div
      ref={dropdownRef}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className="relative inline-block text-left select-none">
      <button
        type="button"
        ref={buttonRef}
        onClick={handleToggleMenu}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="language-menu"
        className={clsx(
          'group flex items-center gap-2 rounded-xl border border-transparent px-3 py-1.5 font-medium transition-all duration-200 outline-none',
          'cursor-pointer text-slate-700 hover:bg-slate-100/80',
          'dark:text-slate-300 dark:hover:bg-slate-800/80',
          'focus-visible:border-current focus-visible:ring-2 focus-visible:ring-current/20',
          isOpen && 'bg-slate-100/80 dark:bg-slate-800/80',
        )}>
        <Icon
          size="lg"
          icon={GlobeIcon}
          color="text-slate-700 dark:text-slate-300 transition-colors duration-200"
        />
        <span className="text-sm font-semibold tracking-wide uppercase transition-colors duration-200">
          {currentLanguageCode}
        </span>
      </button>

      {isOpen && (
        <div
          id="language-menu"
          role="menu"
          className={clsx(
            'absolute right-0 mt-2 w-48 rounded-xl border p-1 shadow-lg transition-all duration-150',
            'z-50 border-slate-100 bg-white shadow-slate-200/50',
            'dark:border-slate-800 dark:bg-slate-900 dark:shadow-none',
          )}>
          {languageOptions.map((lang, index) => {
            const isSelected = lang.abbreviation === currentLanguageCode;
            return (
              <button
                type="button"
                key={lang.testId}
                ref={el => {
                  menuItemsRef.current[index] = el;
                }}
                role="menuitem"
                disabled={isSelected}
                onClick={() => handleSelectLanguage(lang.abbreviation)}
                data-testid={lang.testId}
                className={clsx(
                  'flex w-full items-center gap-3 rounded-lg border border-transparent px-4 py-2.5 text-left text-sm font-medium transition-colors outline-none',
                  'focus-visible:border-slate-200 focus-visible:bg-slate-50/60 focus-visible:text-slate-900',
                  'dark:focus-visible:border-slate-700 dark:focus-visible:bg-slate-800/50 dark:focus-visible:text-white',
                  isSelected
                    ? 'cursor-default bg-slate-50 font-semibold text-slate-900 dark:bg-slate-800 dark:text-white'
                    : 'cursor-pointer text-slate-400 hover:bg-slate-50/60 hover:text-slate-600 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-200',
                )}>
                <Icon size="md" icon={lang.icon} alt={lang.alt} color="none" />
                <span className={clsx(isSelected && 'font-bold')}>
                  {lang.label()}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
