import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { store } from '../redux/store';

import en from './en.json';
import tr from './tr.json';

const resources = {
    en: { translation: en },
    tr: { translation: tr },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: store.getState().language.language,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export const setI18nConfig = () => {
    const currentLanguage = store.getState().language.language;
    i18n.changeLanguage(currentLanguage);
};

export default i18n;
