import {clsx} from 'clsx';
import {Icon} from '../Icon/Icon';
import {LanguageSelector} from '../LanguageSelector/LanguageSelector';
import {ThemeToggle} from '../ThemeToggle/ThemeToggle';
import {useTranslation} from 'react-i18next';
import {namespaces} from 'i18n';
import iLogo from 'assets/icons/iLogo.svg';

export const Header = () => {
  const {t} = useTranslation(namespaces.header.name);

  const navItems = [
    {label: t('navHome'), active: true},
    {label: t('navSkills'), active: false},
    {label: t('navProjects'), active: false},
    {label: t('navAbout'), active: false},
  ];

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 w-full border-b backdrop-blur-md transition-colors duration-200',
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
            Alexandre Gonçalves
          </span>
        </div>
        <nav
          role="navigation"
          className="hidden items-center gap-8 select-none md:flex">
          {navItems.map(item => (
            <button
              key={item.label}
              className={clsx(
                'cursor-pointer text-sm font-medium transition-colors outline-none focus-visible:text-sky-500 focus-visible:underline',
                item.active
                  ? 'font-bold text-slate-900 dark:text-white'
                  : 'text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300',
              )}>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
