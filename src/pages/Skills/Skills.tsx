import {useState, useCallback, useMemo} from 'react';
import {clsx} from 'clsx';
import {useTranslation} from 'react-i18next';
import {namespaces} from 'i18n';
import {profile} from 'constants/profile';
import {Icon} from 'components/Icon/Icon';

type CategoryType = 'frontend' | 'tools';

const SKILLS_CATEGORIES: CategoryType[] = ['frontend', 'tools'];

export const Skills = () => {
  const {t} = useTranslation(namespaces.skills.name);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleSkillClick = useCallback((skillName: string) => {
    setSelectedSkill(prev => (prev === skillName ? null : skillName));
  }, []);

  const frontendSkills = useMemo(() => {
    return profile.skills.filter(skill => skill.category === 'frontend');
  }, []);

  const toolsSkills = useMemo(() => {
    return profile.skills.filter(skill => skill.category === 'tools');
  }, []);

  return (
    <div className="animate-fade-in mx-auto mb-28 flex w-full max-w-7xl flex-1 flex-col p-4 select-none md:mb-0 md:p-8 lg:p-12">
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
                  const isSelected = selectedSkill === skill.name;

                  return (
                    <button
                      key={skill.name}
                      type="button"
                      onClick={() => handleSkillClick(skill.name)}
                      className={clsx(
                        'flex cursor-pointer items-center justify-between rounded-xl border p-3.5 text-left transition-all duration-200 outline-none active:scale-98',
                        isSelected
                          ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 shadow-sm shadow-emerald-500/5 dark:border-emerald-400/30 dark:bg-emerald-400/5 dark:text-emerald-400'
                          : 'border-slate-200/60 bg-white text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900/40',
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
                          isSelected
                            ? 'bg-emerald-500/20 text-emerald-700 dark:bg-emerald-400/20 dark:text-emerald-300'
                            : 'bg-slate-100 text-slate-500 dark:bg-slate-800/80 dark:text-slate-400',
                        )}>
                        {t(skill.levelKey)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col rounded-2xl border border-slate-100 bg-slate-50/50 p-6 text-left shadow-xs dark:border-slate-900 dark:bg-[#0c111d]">
        <h3 className="mb-2 text-sm font-bold tracking-tight text-slate-900 dark:text-slate-50">
          {selectedSkill ? `${selectedSkill} — Stack View` : t('footerTitle')}
        </h3>
        <p className="text-justify text-xs leading-relaxed text-slate-600 dark:text-slate-400">
          {selectedSkill
            ? `${t('footerDesc')} Em cenários reais com ${selectedSkill}, busco aplicar práticas de refatoração contínua, arquitetura desacoplada e testes automatizados para garantir entregas estáveis e de alto valor de negócio.`
            : t('footerDesc')}
        </p>
      </div>
    </div>
  );
};
