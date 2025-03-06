import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

import development_en from '../../messages/development/en.json';

import development_ru from '../../messages/development/ru.json';

import chaika_en from '@/../messages/chaika/en.json';
import chaika_ru from '@/../messages/chaika/ru.json';
import deda_f_en from '@/../messages/deda_f/en.json';
import deda_f_ru from '@/../messages/deda_f/ru.json';

import deda_k_en from '@/../messages/deda_k/en.json';
import deda_k_ru from '@/../messages/deda_k/ru.json';
import deda_l_en from '@/../messages/deda_l/en.json';
import deda_l_ru from '@/../messages/deda_l/ru.json';

import en from '@/../messages/en.json';
import ferma_cafe_en from '@/../messages/ferma_cafe/en.json';
import ferma_cafe_ru from '@/../messages/ferma_cafe/ru.json';
import ferma_f_en from '@/../messages/ferma_f/en.json';
import ferma_f_ru from '@/../messages/ferma_f/ru.json';

import ferma_k_metro_kom_en from '@/../messages/ferma_k_metro_kom/en.json';
import ferma_k_metro_kom_ru from '@/../messages/ferma_k_metro_kom/ru.json';

import ferma_k_metro_pul_en from '@/../messages/ferma_k_metro_pul/en.json';
import ferma_k_metro_pul_ru from '@/../messages/ferma_k_metro_pul/ru.json';

import ferma_k_perekrestok_en from '@/../messages/ferma_k_perekrestok/en.json';
import ferma_k_perekrestok_ru from '@/../messages/ferma_k_perekrestok/ru.json';
import ferma_k_td_passage_en from '@/../messages/ferma_k_td_passage/en.json';
import ferma_k_td_passage_ru from '@/../messages/ferma_k_td_passage/ru.json';

import ferma_s_en from '@/../messages/ferma_s/en.json';
import ferma_s_ru from '@/../messages/ferma_s/ru.json';

import ru from '@/../messages/ru.json';

const placeRU = new Map(
    Object.entries({
        chaika: chaika_ru,
        deda_f: deda_f_ru,
        deda_l: deda_l_ru,
        deda_k: deda_k_ru,
        ferma_f: ferma_f_ru,
        ferma_s: ferma_s_ru,
        ferma_cafe: ferma_cafe_ru,
        ferma_k_metro_kom: ferma_k_metro_kom_ru,
        ferma_k_metro_pul: ferma_k_metro_pul_ru,
        ferma_k_td_passage: ferma_k_td_passage_ru,
        ferma_k_perekrestok: ferma_k_perekrestok_ru,
        development: development_ru,
    }),
);

const placeEN = new Map(
    Object.entries({
        chaika: chaika_en,
        deda_f: deda_f_en,
        deda_l: deda_l_en,
        deda_k: deda_k_en,
        ferma_f: ferma_f_en,
        ferma_s: ferma_s_en,
        ferma_cafe: ferma_cafe_en,
        ferma_k_metro_kom: ferma_k_metro_kom_en,
        ferma_k_metro_pul: ferma_k_metro_pul_en,
        ferma_k_td_passage: ferma_k_td_passage_en,
        ferma_k_perekrestok: ferma_k_perekrestok_en,
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
