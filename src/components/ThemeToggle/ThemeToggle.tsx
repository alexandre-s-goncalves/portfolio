import {Icon} from '../Icon/Icon';
import iSun from 'assets/icons/iSun.svg';
import iMoon from 'assets/icons/iMoon.svg';
import {clsx} from 'clsx';
import {useTheme} from 'context/ThemeContext';

export const ThemeToggle = () => {
  const {themeDark, toggleTheme} = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={themeDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      className={clsx(
        'group flex h-9 w-9 items-center justify-center rounded-xl border border-transparent transition-all duration-200 outline-none',
        'cursor-pointer text-slate-700 hover:bg-slate-100/80',
        'dark:text-slate-300 dark:hover:bg-slate-800/80',
        'focus-visible:border-current focus-visible:ring-2 focus-visible:ring-current/20',
      )}>
      <Icon
        size="lg"
        icon={themeDark ? iSun : iMoon}
        color="text-slate-700 dark:text-slate-300 transition-colors duration-200"
      />
    </button>
  );
};
