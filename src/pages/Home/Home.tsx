import {useTranslation} from 'react-i18next';
import {namespaces} from 'i18n';

export const Home = () => {
  const {t} = useTranslation(namespaces.home.name);
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
        {t('title')}
      </h1>
    </div>
  );
};
