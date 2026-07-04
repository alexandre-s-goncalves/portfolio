import {clsx} from 'clsx';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {namespaces} from 'i18n';
import {AppRoutes} from 'resources/enum';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const {t} = useTranslation(namespaces.notFound.name);

  return (
    <div
      data-testid="pagina-notfound"
      className="animate-fade-in flex h-full w-full flex-1 items-center justify-center p-6 select-none">
      <div className="flex max-w-2xl flex-col items-center text-center">
        <div className="relative mb-6 flex h-48 w-full items-center justify-center">
          <h1 className="absolute bg-linear-to-b from-sky-400 to-sky-600 bg-clip-text text-[120px] font-black tracking-tighter text-transparent opacity-15 drop-shadow-2xl select-none dark:from-sky-500 dark:to-sky-800">
            {t('title')}
          </h1>
          <svg
            viewBox="0 0 200 200"
            className="h-44 w-44 animate-bounce text-sky-500/80 drop-shadow-[0_0_15px_rgba(14,165,233,0.3)] duration-4000 dark:text-sky-400/80"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="100" cy="110" r="45" />
            <path d="M100 25 L100 65" />
            <path d="M60 40 L80 55" />
            <path d="M140 40 L120 55" />
            <circle cx="85" cy="105" r="4" fill="currentColor" />
            <circle cx="115" cy="105" r="4" fill="currentColor" />
            <path d="M85 130 Q100 115 115 130" strokeWidth="3" />
            <ellipse
              cx="100"
              cy="155"
              rx="30"
              ry="10"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl dark:text-slate-100">
          {t('message')}
        </h2>

        <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {t('description')}
        </p>

        <button
          onClick={() => navigate(AppRoutes.HOME)}
          className={clsx(
            'group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl px-6 text-sm font-semibold tracking-wide transition-all duration-300 outline-none active:scale-95',
            'bg-sky-500 text-white shadow-lg shadow-sky-500/20 hover:bg-sky-600 hover:shadow-sky-600/30 focus-visible:ring-2 focus-visible:ring-sky-500/40',
            'dark:bg-sky-600 dark:hover:bg-sky-500 dark:focus-visible:ring-sky-400/40',
          )}>
          <span className="flex items-center gap-2 transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          <span className="ml-1">{t('backButton')}</span>
        </button>
      </div>
    </div>
  );
};
