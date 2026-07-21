import {clsx} from 'clsx';
import {useTranslation} from 'react-i18next';
import {namespaces} from 'i18n';
import {profile} from 'constants/profile';
import {Icon} from 'components/Icon/Icon';
import fotoPerfil from 'assets/images/foto-perfil.jpeg';
import iMail from 'assets/icons/iMail.svg';
import iLocation from 'assets/icons/iLocation.svg';
import iGithub from 'assets/icons/iGithub.svg';
import iLinkedin from 'assets/icons/iLinkedin.svg';
import iDownload from 'assets/icons/iDownload.svg';
import iCalendar from 'assets/icons/iCalendar.svg';

export const About = () => {
  const {t} = useTranslation(namespaces.about.name);

  return (
    <div className="animate-fade-in mx-auto flex w-full max-w-7xl flex-1 flex-col p-4 select-none md:p-8 lg:p-12">
      <h1 className="mb-8 border-b border-slate-200 pb-4 text-2xl font-black tracking-tight text-slate-900 md:text-3xl dark:border-slate-900 dark:text-slate-50">
        {t('title')}
      </h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-6 flex w-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-xs dark:border-slate-900 dark:bg-[#0c111d]">
            <div className="mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-slate-200/60 bg-slate-100 shadow-md dark:border-slate-800 dark:bg-slate-900">
              <img
                src={fotoPerfil}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            </div>

            <h2 className="mb-1 text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              {profile.name}
            </h2>

            <span className="mb-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
              {t('jobs.title1')}
            </span>

            <ul className="w-full space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600 dark:border-slate-800/60 dark:text-slate-400">
              <li className="flex items-center justify-center gap-2 truncate lg:justify-start">
                <Icon size="md" icon={iMail} color="currentColor" />
                <a
                  href={`mailto:${profile.email}`}
                  className="transition-colors outline-none hover:text-slate-900 focus-visible:underline dark:hover:text-slate-100">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center justify-center gap-2 lg:justify-start">
                <Icon size="md" icon={iLocation} color="currentColor" />
                <span>São Paulo, Brasil</span>
              </li>
            </ul>
          </div>

          <div className="mb-3 grid w-full grid-cols-2 gap-2">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={clsx(
                'inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-900 shadow-2xs transition-all outline-none hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-slate-200 active:scale-98',
                'dark:border-slate-800 dark:bg-[#0c111d] dark:text-slate-100 dark:hover:bg-slate-900/60 dark:focus-visible:ring-slate-800',
              )}>
              <Icon icon={iGithub} size={14} color="currentColor" />
              <span>GitHub</span>
            </a>

            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={clsx(
                'inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-900 shadow-2xs transition-all outline-none hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-slate-200 active:scale-98',
                'dark:border-slate-800 dark:bg-[#0c111d] dark:text-slate-100 dark:hover:bg-slate-900/60 dark:focus-visible:ring-slate-800',
              )}>
              <Icon icon={iLinkedin} size={14} color="currentColor" />
              <span>LinkedIn</span>
            </a>
          </div>

          <button
            type="button"
            className={clsx(
              'inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-xl text-xs font-bold shadow-xs transition-all outline-none active:scale-95',
              'bg-slate-950 text-white hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-slate-950/40',
              'dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-200 dark:focus-visible:ring-slate-300/40',
            )}>
            <Icon icon={iDownload} size={16} color="currentColor" />
            <span>{t('downloadCv')}</span>
          </button>
        </div>
        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-xs dark:border-slate-900 dark:bg-[#0c111d]">
            <h3 className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-2 text-base font-bold tracking-tight text-slate-900 dark:border-slate-800/60 dark:text-slate-50">
              {t('sections.bio')}
            </h3>
            <div className="space-y-4 text-justify text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              <p>{t('paragraphs.p1')}</p>
              <p>{t('paragraphs.p2')}</p>
              <p>{t('paragraphs.p3')}</p>
              <p>{t('paragraphs.p4')}</p>
              <p>{t('paragraphs.p5')}</p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-xs dark:border-slate-900 dark:bg-[#0c111d]">
            <h3 className="mb-6 text-base font-bold tracking-tight text-slate-900 dark:text-slate-50">
              {t('sections.experience')}
            </h3>
            <div className="space-y-6">
              {[1, 2, 3].map((id, index, array) => (
                <div
                  key={id}
                  className={clsx(
                    'flex w-full flex-col text-left',
                    index < array.length - 1 &&
                      'border-b border-slate-200/80 pb-6 dark:border-slate-800/40',
                  )}>
                  <div className="mb-1 flex w-full flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-50">
                      {t(`jobs.title${id}`)}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-slate-500">
                      <Icon icon={iCalendar} size={14} color="currentColor" />
                      <span>{t(`jobs.period${id}`)}</span>
                    </div>
                  </div>
                  <span className="mb-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {t(`jobs.company${id}`)}
                  </span>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {t(`jobs.desc${id}`)}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-xs dark:border-slate-900 dark:bg-[#0c111d]">
            <h3 className="mb-6 text-base font-bold tracking-tight text-slate-900 dark:text-slate-50">
              {t('sections.education')}
            </h3>
            <div className="space-y-6">
              {['1', '2', '3', '4'].map((id, index, array) => (
                <div
                  key={id}
                  className={clsx(
                    'flex w-full flex-col text-left',
                    index < array.length - 1 &&
                      'border-b border-slate-200/80 pb-6 dark:border-slate-800/40',
                  )}>
                  <div className="mb-1 flex w-full flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-50">
                      {t(`academy.title${id}`)}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-slate-500">
                      <Icon icon={iCalendar} size={14} color="currentColor" />
                      <span>{t(`academy.period${id}`)}</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {t(`academy.school${id}`)}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
