import {clsx} from 'clsx';
import {useTranslation} from 'react-i18next';
import {namespaces} from 'i18n';
import {Icon} from '../Icon/Icon';
import iLogo from 'assets/icons/iLogo.svg';
import iGithub from 'assets/icons/iGithub.svg';
import iLinkedin from 'assets/icons/iLinkedin.svg';
import iMail from 'assets/icons/iMail.svg';
import iHeart from 'assets/icons/iHeart.svg';
import {profile} from 'constants/profile';

export const Footer = () => {
  const {t} = useTranslation(namespaces.footer.name);

  return (
    <footer
      className={clsx(
        'mt-auto w-full border-t transition-colors duration-200',
        'border-slate-100 bg-white text-slate-600',
        'dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400',
      )}>
      <div className="mx-auto w-full max-w-7xl px-6 py-4">
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex flex-col gap-2 text-left">
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
            <p className="max-w-sm text-sm leading-relaxed">{t('bio')}</p>
            <div className="flex items-center gap-4 pt-0.5">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-1 transition-colors outline-none hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-sky-500 dark:hover:text-white">
                <Icon size="md" icon={iGithub} color="currentColor" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-1 transition-colors outline-none hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-sky-500 dark:hover:text-white">
                <Icon size="md" icon={iLinkedin} color="currentColor" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-1 transition-colors outline-none hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-sky-500 dark:hover:text-white">
                <Icon size="md" icon={iMail} color="currentColor" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-1 text-left">
            <h3 className="font-semibold text-slate-800 dark:text-slate-200">
              {t('contactTitle')}
            </h3>
            <ul className="flex flex-col items-start gap-1 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors outline-none hover:text-slate-900 focus-visible:underline dark:hover:text-white">
                  {profile.email}
                </a>
              </li>
              <li>{t('location')}</li>
            </ul>
          </div>
        </div>
        <div
          className={clsx(
            'mt-4 flex flex-col items-center justify-center gap-2 border-t pt-3 text-center text-xs lg:flex-row lg:items-center lg:justify-between lg:text-left',
            'border-slate-100 dark:border-slate-800',
          )}>
          <p>
            &copy; 2026 {profile.name}. {t('rights')}
          </p>
          <p className="flex items-center justify-center gap-1">
            <span>{t('builtWith')}</span>
            <Icon size="sm" icon={iHeart} color="text-red-400" />
            <span>React &amp; Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
