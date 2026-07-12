import {clsx} from 'clsx';
import {useTranslation} from 'react-i18next';
import {namespaces} from 'i18n';
import {profile} from 'constants/profile';
import {AppRoutes} from 'resources/enum';
import {useNavigate} from 'react-router-dom';
import {calculateYearsDifference} from 'utils/date';

const TECH_TAGS = [
  'React.js',
  'React Native',
  'JavaScript',
  'TypeScript',
  'Jest',
];

export const Home = () => {
  const navigate = useNavigate();
  const {t} = useTranslation(namespaces.home.name);
  const yearsExperience = calculateYearsDifference('2021-08-01');

  return (
    <div className="animate-fade-in flex w-full flex-1 flex-col pb-0 select-none">
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center p-5 pt-6 pb-6 text-center md:px-12 md:pt-8 md:pb-8 md:text-left lg:px-16">
        <span className="mb-1 text-xs font-medium tracking-wide text-slate-500 md:text-sm dark:text-slate-400">
          {t('greeting')}
        </span>

        <h1 className="mx-auto mb-2 text-3xl font-black tracking-tight text-slate-900 md:mx-0 md:text-5xl dark:text-slate-50">
          {profile.name}
        </h1>

        <h2 className="mb-5 text-lg font-bold tracking-tight text-slate-600 md:text-2xl dark:text-slate-400">
          {t('role')}
        </h2>

        <p className="mb-6 max-w-2xl px-2 text-xs leading-relaxed text-slate-500 md:px-0 md:text-base dark:text-slate-400">
          {t('bio')}
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-2 md:justify-start">
          {TECH_TAGS.map(tech => (
            <span
              key={tech}
              className="inline-flex items-center rounded-xl border border-slate-200/40 bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-800 transition-colors md:px-3 md:py-1 md:text-xs dark:border-slate-700/30 dark:bg-slate-800/60 dark:text-slate-200">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex w-full flex-col items-center gap-3 md:w-auto md:flex-row md:items-center md:gap-4">
          <button
            type="button"
            onClick={() => navigate(AppRoutes.PROJECTS)}
            className={clsx(
              'group relative inline-flex h-11 w-full max-w-xs cursor-pointer items-center justify-center rounded-xl px-6 text-sm font-semibold tracking-wide transition-all duration-300 outline-none active:scale-95 md:w-auto md:max-w-none',
              'bg-slate-950 text-white shadow-lg shadow-slate-950/10 hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-slate-950/40',
              'dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-200 dark:focus-visible:ring-slate-300/40',
            )}>
            <span>{t('ctaProjects')}</span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <button
            type="button"
            onClick={() => navigate(AppRoutes.ABOUT)}
            className={clsx(
              'inline-flex h-11 w-full max-w-xs cursor-pointer items-center justify-center rounded-xl px-6 text-sm font-semibold tracking-wide transition-all duration-300 outline-none active:scale-95 md:w-auto md:max-w-none',
              'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-slate-200/40',
              'dark:border-slate-800 dark:bg-transparent dark:text-slate-100 dark:hover:bg-slate-900/60 dark:focus-visible:ring-slate-800/40',
            )}>
            <span>{t('ctaContact')}</span>
          </button>
        </div>
      </div>

      <div className="w-full border-t border-slate-100 bg-slate-50/70 py-5 md:py-6 dark:border-slate-900 dark:bg-[#0c111d]">
        <div className="mx-auto grid w-full max-w-4xl grid-cols-3 gap-2 px-4 text-center md:gap-4 md:px-6">
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl font-black tracking-tight text-slate-900 md:text-3xl dark:text-slate-50">
              15+
            </span>
            <span className="mt-0.5 text-[9px] font-medium tracking-wider text-slate-500 uppercase md:text-xs dark:text-slate-400">
              {t('metricsProjects')}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-xl font-black tracking-tight text-slate-900 md:text-3xl dark:text-slate-50">
              {yearsExperience}+
            </span>
            <span className="mt-0.5 text-[9px] font-medium tracking-wider text-slate-500 uppercase md:text-xs dark:text-slate-400">
              {t('metricsExperience')}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-xl font-black tracking-tight text-slate-900 md:text-3xl dark:text-slate-50">
              8+
            </span>
            <span className="mt-0.5 text-[9px] font-medium tracking-wider text-slate-500 uppercase md:text-xs dark:text-slate-400">
              {t('metricsTech')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
