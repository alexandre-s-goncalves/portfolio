import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {languages} from './i18n.constants';
import {pt} from './locales/pt';
import {en} from './locales/en';
import {fr} from './locales/fr';
import {es} from './locales/es';

export const resources = {
  [languages.pt]: pt,
  [languages.en]: en,
  [languages.fr]: fr,
  [languages.es]: es,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use({
    type: 'postProcessor',
    name: 'customAttribute',
    process: (value: string) => value,
  })
  .init({
    resources: resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', lng => {
  document.documentElement.lang = lng;
});

export default i18n;
