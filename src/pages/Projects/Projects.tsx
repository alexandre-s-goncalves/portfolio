import {useState, useCallback, useEffect, useRef} from 'react';
import {clsx} from 'clsx';
import {useTranslation} from 'react-i18next';
import {namespaces} from 'i18n';
import {profile} from 'constants/profile';
import {Icon} from 'components/Icon/Icon';
import iGithub from 'assets/icons/iGithub.svg';
import iLaunch from 'assets/icons/iLaunch.svg';
import screenPortfolio from 'assets/projectImages/screenPortfolio.png';

const PROJECT_IMAGES: Record<string, string> = {
  portfolio: screenPortfolio,
};

export const Projects = () => {
  const {t} = useTranslation(namespaces.projects.name);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = useCallback((img: string) => {
    setActiveImage(img);
    dialogRef.current?.showModal();
  }, []);

  const closeModal = useCallback(() => {
    dialogRef.current?.close();
    setActiveImage(null);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;

    const handleCancel = (e: Event) => {
      e.preventDefault();
      closeModal();
    };

    if (activeImage && dialog) {
      dialog.addEventListener('cancel', handleCancel);
    }

    return () => {
      dialog?.removeEventListener('cancel', handleCancel);
    };
  }, [activeImage, closeModal]);

  return (
    <div className="animate-fade-in mx-auto flex h-auto w-full max-w-7xl flex-col pt-8 pr-4 pb-4 pl-4 select-none lg:h-full lg:overflow-hidden lg:pr-8 lg:pb-4 lg:pl-8 xl:pr-12 xl:pl-12">
      <div className="mb-6 shrink-0 border-b border-slate-100 pb-4 text-left dark:border-slate-900">
        <h1 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl dark:text-slate-50">
          {t('title')}
        </h1>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          {t('subtitle')}
        </p>
      </div>

      <div className="w-full lg:flex-1 lg:scrollbar-thin lg:overflow-y-auto lg:pr-2">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-start gap-6 pb-6 md:grid-cols-2 md:pb-0">
          {profile.projects.map(project => {
            const projectImage = PROJECT_IMAGES[project.id];
            const isCompleted = project.status === 'completed';

            return (
              <div
                key={project.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 shadow-xs dark:border-slate-900 dark:bg-[#0c111d]">
                <button
                  type="button"
                  disabled={!projectImage}
                  onClick={() => projectImage && openModal(projectImage)}
                  aria-label={`${t(project.titleKey)} — Expandir Imagem de Preview`}
                  className={clsx(
                    'group relative block h-36 w-full shrink-0 overflow-hidden border-b border-slate-100 bg-slate-50/50 text-left transition-opacity hover:opacity-90 dark:border-slate-900/80 dark:bg-[#0c111d]',
                    projectImage ? 'cursor-zoom-in' : 'cursor-default',
                  )}>
                  {projectImage ? (
                    <img
                      src={projectImage}
                      alt={t(project.titleKey)}
                      className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-102"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-slate-400 dark:text-slate-600">
                      <Icon icon="image" size={24} color="currentColor" />
                      <span className="text-[10px] font-bold tracking-wider uppercase">
                        {' '}
                        Preview Indisponível{' '}
                      </span>
                    </div>
                  )}
                </button>

                <div className="flex flex-1 flex-col justify-between p-5 text-left">
                  <div>
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <h2 className="text-sm font-bold tracking-tight text-slate-900 dark:text-slate-50">
                        {t(project.titleKey)}
                      </h2>
                      <span
                        className={clsx(
                          'inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase',
                          isCompleted
                            ? 'bg-emerald-500/10 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400'
                            : 'bg-amber-500/10 text-amber-700 dark:bg-amber-400/10 dark:text-amber-400',
                        )}>
                        <span
                          className={clsx(
                            'h-1 w-1 rounded-full',
                            isCompleted ? 'bg-emerald-500' : 'bg-amber-500',
                          )}
                        />
                        {t(`status.${project.status}`)}
                      </span>
                    </div>
                    <p className="mb-4 min-h-12 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      {t(project.descKey)}
                    </p>
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-lg border border-slate-200/40 bg-white px-2 py-0.5 text-[9px] font-semibold text-slate-500 dark:border-slate-800/60 dark:bg-slate-950 dark:text-slate-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={clsx(
                      'mt-auto grid w-full gap-2',
                      project.viewUrl ? 'grid-cols-2' : 'grid-cols-1',
                    )}>
                    {project.viewUrl && (
                      <a
                        href={project.viewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-900 shadow-2xs transition-all outline-none hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-slate-200 active:scale-98 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900/40">
                        <span className="pointer-events-none flex items-center justify-center gap-2 text-slate-900 dark:text-slate-100">
                          <Icon
                            icon={iLaunch}
                            size="md"
                            color="text-slate-900 dark:text-slate-100"
                          />
                          <span>{t('ctaView')}</span>
                        </span>
                      </a>
                    )}
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center justify-center gap-2 rounded-xl bg-slate-950 text-xs font-bold text-white shadow-xs transition-all outline-none hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-slate-950/40 active:scale-95 dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-200 dark:focus-visible:ring-slate-300/40">
                      <Icon
                        size="md"
                        icon={iGithub}
                        color="text-white dark:text-slate-950"
                      />
                      <span>{t('ctaCode')}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Visualização expandida da imagem do projeto"
        className="fixed inset-0 z-50 m-0 h-full max-h-full w-full max-w-full border-0 bg-transparent p-0">
        {activeImage && (
          <button
            type="button"
            onClick={closeModal}
            aria-label="Fechar visualização expandida"
            className="absolute inset-0 flex h-full w-full cursor-zoom-out items-center justify-center border-0 bg-black/80 p-4 backdrop-blur-sm outline-none">
            <figure className="pointer-events-none relative flex max-h-[85vh] max-w-5xl overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-2xl dark:border-slate-800 dark:bg-[#0c111d]">
              <img
                src={activeImage}
                alt="Visualização expandida"
                className="pointer-events-auto max-h-[80vh] max-w-full rounded-lg object-contain"
              />
            </figure>
          </button>
        )}
      </dialog>
    </div>
  );
};
