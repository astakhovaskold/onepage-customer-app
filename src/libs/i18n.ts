import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

import deda_f_en from '@/../messages/deda_f/en.json';
import deda_f_ru from '@/../messages/deda_f/ru.json';

import development_en from '@/../messages/development/en.json';
import development_ru from '@/../messages/development/ru.json';

import en from '@/../messages/en.json';
import ru from '@/../messages/ru.json';

const placeRU = new Map(
    Object.entries({
        deda_f: deda_f_ru,
        development: development_ru,
    }),
);

const placeEN = new Map(
    Object.entries({
        deda_f: deda_f_en,
        development: development_en,
    }),
);

const resources = {
    ru: {
        common: ru,
        place: (placeRU.has(import.meta.env.MODE) ? placeRU.get(import.meta.env.MODE) : development_ru)!,
    },
    en: {
        common: en,
        place: (placeEN.has(import.meta.env.MODE) ? placeEN.get(import.meta.env.MODE) : development_en)!,
    },
};

i18n.use(detector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ru',
        interpolation: {
            escapeValue: false,
        },
        returnObjects: true,
    });

export default i18n;
