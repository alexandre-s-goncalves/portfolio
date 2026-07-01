import {clsx} from 'clsx';
import {useTranslation} from 'react-i18next';
import {namespaces} from 'i18n';
import {LanguageSelector} from 'components/LanguageSelector/LanguageSelector';
import {ThemeToggle} from 'components/ThemeToggle/ThemeToggle';

export const Settings = () => {
  const {t} = useTranslation(namespaces.settings.name);

  return (
    <div className="animate-in fade-in mx-auto max-w-md px-4 py-8 duration-200 select-none">
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        {t('title')}
      </h1>

      <div
        className={clsx(
          'flex flex-col gap-4 rounded-2xl border p-4 shadow-sm',
          'border-slate-100 bg-white',
          'dark:border-slate-800 dark:bg-slate-900',
        )}>
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              {t('langTitle')}
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500">
              {t('langDesc')}
            </span>
          </div>
          <LanguageSelector />
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              {t('themeTitle')}
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500">
              {t('themeDesc')}
            </span>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
