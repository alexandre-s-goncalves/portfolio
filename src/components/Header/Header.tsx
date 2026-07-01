import {useState, useEffect, useRef} from 'react';
import {clsx} from 'clsx';
import {NavLink} from 'react-router-dom';
import {Icon} from '../Icon/Icon';
import {LanguageSelector} from '../LanguageSelector/LanguageSelector';
import {ThemeToggle} from '../ThemeToggle/ThemeToggle';
import {useTranslation} from 'react-i18next';
import {namespaces} from 'i18n';
import {profile} from 'constants/profile';
import iLogo from 'assets/icons/iLogo.svg';
import iMenu from 'assets/icons/iMenu.svg';
import iClose from 'assets/icons/iClose.svg';
import {AppRoutes} from 'resources/enum';

export const Header = () => {
  const {t: tHeader} = useTranslation(namespaces.header.name);
  const {t: tNav} = useTranslation(namespaces.navigation.name);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const tabs = [
    {path: AppRoutes.HOME, label: tNav('home')},
    {path: AppRoutes.SKILLS, label: tNav('skills')},
    {path: AppRoutes.PROJECTS, label: tNav('projects')},
    {path: AppRoutes.ABOUT, label: tNav('about')},
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={headerRef} className="relative z-50 w-full md:sticky md:top-0">
      <header
        className={clsx(
          'w-full border-b backdrop-blur-md transition-colors duration-200',
          'border-slate-100 bg-white/80 text-slate-900',
          'dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-50',
        )}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2 text-lg font-bold tracking-tight select-none">
            <Icon
              size="lg"
              icon={iLogo}
              color="none"
              className="transition-transform duration-200 hover:scale-105"
            />
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              {profile.name}
            </span>
          </div>

          <nav
            role="navigation"
            aria-label="Main Navigation"
            className="hidden items-center gap-8 select-none lg:flex">
            {tabs.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({isActive}) =>
                  clsx(
                    'cursor-pointer text-sm font-medium transition-colors outline-none focus-visible:text-sky-500 focus-visible:underline',
                    isActive
                      ? 'font-bold text-slate-900 dark:text-white'
                      : 'text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300',
                  )
                }>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-4 md:flex">
              <LanguageSelector />
              <ThemeToggle />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={
                isOpen ? tHeader('closeMenuAlt') : tHeader('openMenuAlt')
              }
              className={clsx(
                'group hidden h-9 w-9 items-center justify-center rounded-xl border border-transparent transition-all duration-200 outline-none md:flex lg:hidden',
                'cursor-pointer text-slate-700 hover:bg-slate-100/80',
                'dark:text-slate-300 dark:hover:bg-slate-800/80',
                'focus-visible:border-current focus-visible:ring-2 focus-visible:ring-current/20',
              )}>
              <Icon
                size="md"
                icon={isOpen ? iClose : iMenu}
                color="text-slate-700 dark:text-slate-300 transition-colors duration-200"
              />
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          id="mobile-menu"
          className={clsx(
            'absolute top-16 left-0 w-full flex-col gap-1 border-b p-4 shadow-xl backdrop-blur-lg transition-colors duration-200 md:flex lg:hidden',
            'border-slate-100 bg-white/95 text-slate-900 shadow-slate-200/50',
            'dark:border-slate-800 dark:bg-slate-950/95 dark:text-slate-50 dark:shadow-none',
          )}>
          <nav
            aria-label="Mobile Navigation"
            className="flex flex-col gap-1 select-none">
            {tabs.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({isActive}) =>
                  clsx(
                    'rounded-lg px-4 py-3 text-sm font-medium transition-colors outline-none focus-visible:bg-slate-100 dark:focus-visible:bg-slate-900',
                    isActive
                      ? 'bg-slate-100 font-bold text-slate-900 dark:bg-slate-900 dark:text-white'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-900/50 dark:hover:text-slate-200',
                  )
                }>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};
