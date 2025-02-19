// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import {getMobileAppLink} from '@/app/modules/home/utils';
import {SLIDE_1} from '@/configuration/slides';
import {Configuration} from '@/configuration/types';
import i18n from '@/libs/i18n';
import {APP_NAME} from '@/libs/text';

const appConfig: Configuration = {
    settings: {
        baseURL: 'https://white-group.ru',
        isDark: false,
        isPublic: true,
    },
    components: {
        header: {
            title: i18n.t('header.title', {ns: 'place'}),
            logo: {
                title: APP_NAME,
                image: 'images/logo.svg',
            },
        },
        carousel: {
            items: [
                {
                    title: i18n.t('carousel.items.0.title'),
                    href: getMobileAppLink(),
                    children: SLIDE_1,
                },
            ],
        },
        menu: {
            items: i18n.t('menu.items', {ns: 'place'}),
        },
        rate: {
            title: i18n.t('rate.title', {ns: 'common'}),
            subtitle: i18n.t('rate.subtitle', {ns: 'common'}),
            wantedRate: 4, // min rate
        },
        tips: {
            title: i18n.t('tips.title', {ns: 'common'}),
            subtitle: i18n.t('tips.subtitle', {ns: 'common'}),
            href: 'https://netmonet.co/tip/group/525781/users/1?o=0',
            button: i18n.t('tips.button', {ns: 'common'}),
        },
        contact: {
            title: i18n.t('contact.title', {ns: 'common'}),
            subtitle: i18n.t('contact.subtitle', {ns: 'common'}),
            items: i18n.t('social_contact.items', {ns: 'place'}),
        },
    },
    modal: {
        form: {
            title: i18n.t('modal.form.title', {ns: 'common'}),
            place: {
                name: i18n.t('place.name', {ns: 'place'}),
                address: i18n.t('place.address', {ns: 'place'}),
                image: 'https://avatars.mds.yandex.net/get-altay/9114271/2a000001901245bbeac2ac49c5635c100a83/L',
            },
            textarea: i18n.t('modal.form.textarea', {ns: 'common'}),
            aspects: i18n.t('modal.form.aspects', {ns: 'common'})?.split(';'),
            submit: i18n.t('modal.form.submit', {ns: 'common'}),
        },
        rate: {
            title: i18n.t('modal.rate.title', {ns: 'common'}),
            items: i18n.t('social_extended.items', {ns: 'place'}),
            submit: i18n.t('modal.rate.submit', {ns: 'common'}),
        },
    },
};

export default appConfig;
