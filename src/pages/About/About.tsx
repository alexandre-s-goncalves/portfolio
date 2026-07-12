import {useTranslation} from 'react-i18next';
import {namespaces} from 'i18n';

export const About = () => {
  const {t} = useTranslation(namespaces.about.name);
  return (
    <div className="flex w-full flex-col items-center justify-center py-20">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
        {t('title')}
      </h1>
    </div>
  );
};
