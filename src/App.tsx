import {useTranslation} from 'react-i18next';
import clsx from 'clsx';
import {languages, namespaces} from './i18n';

function App() {
  const {t, i18n} = useTranslation(namespaces.home.name);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 p-4 text-white">
      <h1 className="mb-2 text-center text-4xl font-bold text-sky-400">
        {t('welcome')} 🚀
      </h1>
      <p className="mb-4 text-xl font-medium text-slate-400">{t('subtitle')}</p>

      <div className="flex flex-wrap justify-center gap-3">
        <ButtonLanguage
          language={languages.pt}
          label="🇧🇷 PT"
          currentLanguage={i18n.language}
          onChangeLanguage={lng => i18n.changeLanguage(lng)}
        />
        <ButtonLanguage
          language={languages.en}
          label="🇺🇸 EN"
          currentLanguage={i18n.language}
          onChangeLanguage={lng => i18n.changeLanguage(lng)}
        />
        <ButtonLanguage
          language={languages.fr}
          label="🇫🇷 FR"
          currentLanguage={i18n.language}
          onChangeLanguage={lng => i18n.changeLanguage(lng)}
        />
        <ButtonLanguage
          language={languages.es}
          label="🇪🇸 ES"
          currentLanguage={i18n.language}
          onChangeLanguage={lng => i18n.changeLanguage(lng)}
        />
      </div>
    </div>
  );
}

const ButtonLanguage = ({
  language,
  label,
  currentLanguage,
  onChangeLanguage,
}: {
  language: string;
  label: string;
  currentLanguage: string;
  onChangeLanguage: (lng: string) => void;
}) => {
  const isActive = currentLanguage === language;

  return (
    <button
      onClick={() => onChangeLanguage(language)}
      disabled={isActive}
      className={clsx(
        'rounded-lg px-4 py-2 font-semibold transition-colors',
        'cursor-pointer bg-slate-800 hover:bg-slate-700',
        'disabled:cursor-default disabled:opacity-40',
        'disabled:hover:bg-slate-800',
      )}>
      {label}
    </button>
  );
};

export default App;
