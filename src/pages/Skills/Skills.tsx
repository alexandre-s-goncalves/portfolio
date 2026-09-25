import {useMemo} from 'react';
import {clsx} from 'clsx';
import {useTranslation} from 'react-i18next';
import {namespaces} from 'i18n';
import {profile} from 'constants/profile';
import {Icon} from 'components/Icon/Icon';

type CategoryType = 'frontend' | 'tools';

const SKILLS_CATEGORIES: CategoryType[] = ['frontend', 'tools'];

export const Skills = () => {
  const {t} = useTranslation(namespaces.skills.name);

  const frontendSkills = useMemo(() => {
    return profile.skills.filter(skill => skill.category === 'frontend');
  }, []);

  const toolsSkills = useMemo(() => {
    return profile.skills.filter(skill => skill.category === 'tools');
  }, []);

  return (
    <div
      className={clsx(
        'animate-fade-in mx-auto mb-28 flex min-h-0 w-full max-w-7xl flex-1 flex-col overflow-y-auto p-4 select-none md:mb-0 md:p-8 lg:h-full lg:p-12',
        'scrollbar-stable scrollbar-thin scrollbar-thumb-transparent dark:scrollbar-thumb-transparent',
        'hover:scrollbar-thumb-slate-300/80 dark:hover:scrollbar-thumb-slate-800/60',
      )}>
      <div className="mb-8 border-b border-slate-100 pb-4 text-left dark:border-slate-900">
        <h1 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl dark:text-slate-50">
          {t('title')}
        </h1>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {SKILLS_CATEGORIES.map(category => {
          const targetedSkills =
            category === 'frontend' ? frontendSkills : toolsSkills;

          return (
            <div
              key={category}
              className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50/50 p-6 shadow-xs dark:border-slate-900 dark:bg-[#0c111d]">
              <h2 className="mb-4 text-sm font-bold tracking-tight text-slate-400 uppercase dark:text-slate-500">
                {t(`categories.${category}`)}
              </h2>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {targetedSkills.map(skill => {
                  return (
                    <div
                      key={skill.name}
                      className={clsx(
                        'flex items-center justify-between rounded-xl border p-3.5 text-left outline-none',
                        'border-slate-200/60 bg-white text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100',
                      )}>
                      <div className="flex items-center gap-3">
                        <Icon
                          icon={skill.icon}
                          size={18}
                          color="currentColor"
                        />
                        <span className="text-xs font-bold tracking-tight">
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={clsx(
                          'rounded-md px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase',
                          'bg-slate-100 text-slate-500 dark:bg-slate-800/80 dark:text-slate-400',
                        )}>
                        {t(skill.levelKey)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex flex-col rounded-2xl border border-slate-100 bg-slate-50/50 p-6 text-left shadow-xs dark:border-slate-900 dark:bg-[#0c111d]">
        <h3 className="mb-2 text-sm font-bold tracking-tight text-slate-900 dark:text-slate-50">
          {t('footerTitle')}
        </h3>
        <p className="text-justify text-xs leading-relaxed text-slate-600 dark:text-slate-400">
          {t('footerDesc')}
        </p>
      </div>
    </div>
  );
};
