import {clsx} from 'clsx';
import {NavLink} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {namespaces} from 'i18n';
import {Icon} from '../Icon/Icon';
import iHome from 'assets/icons/iHome.svg';
import iCode from 'assets/icons/iCode.svg';
import iBriefcase from 'assets/icons/iBriefcase.svg';
import iUser from 'assets/icons/iUser.svg';
import iSettings from 'assets/icons/iSettings.svg';
import {AppRoutes} from 'resources/enum';

export const BottomTabBar = () => {
  const {t} = useTranslation(namespaces.navigation.name);

  const tabs = [
    {path: AppRoutes.HOME, icon: iHome, label: t('home')},
    {path: AppRoutes.SKILLS, icon: iCode, label: t('skills')},
    {path: AppRoutes.PROJECTS, icon: iBriefcase, label: t('projects')},
    {path: AppRoutes.ABOUT, icon: iUser, label: t('about')},
    {path: AppRoutes.SETTINGS, icon: iSettings, label: t('settings')},
  ];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className={clsx(
        'fixed bottom-4 left-1/2 z-50 flex h-16 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center justify-around rounded-2xl border px-2 shadow-xl transition-colors duration-300 select-none md:hidden',
        'border-slate-200/60 bg-white text-slate-600 shadow-slate-200/40',
        'dark:border-slate-800/80 dark:bg-slate-950 dark:text-slate-400 dark:shadow-none',
      )}>
      {tabs.map(tab => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className="relative flex h-full w-14 flex-col items-center justify-center outline-none">
          {({isActive}) => (
            <>
              <div
                className={clsx(
                  'z-10 flex items-center justify-center transition-all duration-300 ease-out',
                  isActive
                    ? 'absolute -top-5 h-12 w-12 scale-105 rounded-full bg-emerald-400 text-slate-950 shadow-lg ring-4 shadow-emerald-400/20 ring-slate-50 dark:ring-slate-950'
                    : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200',
                )}>
                <Icon size="md" icon={tab.icon} color="currentColor" />
              </div>

              <span
                className={clsx(
                  'absolute bottom-1 text-[9px] font-bold tracking-tight transition-all duration-300',
                  isActive
                    ? 'scale-105 text-slate-900 opacity-100 dark:text-slate-50'
                    : 'pointer-events-none translate-y-2 text-transparent opacity-0',
                )}>
                {tab.label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};
