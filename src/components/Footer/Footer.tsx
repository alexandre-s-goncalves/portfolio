import {clsx} from 'clsx';
import {useTranslation} from 'react-i18next';
import {namespaces} from 'i18n';
import {profile} from 'constants/profile';
import {Icon} from '../Icon/Icon';
import iGithub from 'assets/icons/iGithub.svg';
import iLinkedin from 'assets/icons/iLinkedin.svg';
import iMail from 'assets/icons/iMail.svg';
import iHeart from 'assets/icons/iHeart.svg';

export const Footer = () => {
  const {t} = useTranslation(namespaces.footer.name);

  return (
    <footer
      className={clsx(
        'w-full shrink-0 border-t pb-24 transition-colors duration-200 lg:mt-auto lg:pb-4',
        'border-slate-100 bg-white text-slate-600',
        'dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400',
      )}>
      <div className="mx-auto w-full max-w-7xl px-6 py-4">
        <div className="mb-4 flex flex-col gap-2 text-left">
          <div className="flex w-full items-center justify-center gap-12 pt-0.5">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-1 transition-colors outline-none hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-sky-500 dark:hover:text-white">
              <Icon size="md" icon={iGithub} color="currentColor" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-1 transition-colors outline-none hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-sky-500 dark:hover:text-white">
              <Icon size="md" icon={iLinkedin} color="currentColor" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="rounded-lg p-1 transition-colors outline-none hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-sky-500 dark:hover:text-white">
              <Icon size="md" icon={iMail} color="currentColor" />
            </a>
          </div>
        </div>
        <div
          className={clsx(
            'flex flex-col items-center justify-center gap-2 text-center text-xs lg:flex-row lg:justify-between lg:text-left',
            'lg:border-t lg:pt-3',
          )}>
          <p>
            &copy; 2026 {profile.name}. {t('rights')}
          </p>
          <div className="flex items-center justify-center gap-1">
            <span>{t('builtWith')}</span>
            <Icon size="sm" icon={iHeart} color="text-red-400" />
            <span>React &amp; Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
