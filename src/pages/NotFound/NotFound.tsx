import {useTranslation} from 'react-i18next';
import {namespaces} from 'i18n';

export const NotFound = () => {
  const {t} = useTranslation(namespaces.notFound.name);
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-6xl font-black text-sky-500">{t('title')}</h1>
      <p className="mt-4 text-xl font-medium text-slate-600 dark:text-slate-400">
        {t('message')}
      </p>
    </div>
  );
};
