import {ReactNode} from 'react';

import {SocialMediaType} from '@/app/components/SocialMediaIcon/types';
import {getMobileAppLink} from '@/app/modules/home/utils';
import {SLIDE_1} from '@/configuration/slides';
import i18n from '@/libs/i18n';
import {APP_NAME} from '@/libs/text';

interface Configuration {
    settings: {isDark: boolean; isPublic: boolean};
    components: {
        rate: {subtitle: string; wantedRate: number; title: string};
        contact: {
            subtitle: string;
            title: string;
            items: Array<{href: string; type: string}>;
        };
        header: {title?: ReactNode; logo: {image: string; title: string}};
        carousel: {items: Array<{children: ReactNode; href: string; title: string}>};
        menu: {items: Array<{href: string; title: string}>};
        tips: {button: string; subtitle: string; href: string; title: string};
    };
    modal: {
        form: {
            title: string;
            place: {image: string; address: string; name: string};
            textarea: string;
            aspects: Array<string>;
            submit: string;
        };
        rate: {
            submit: string;
            title: string;
            items: Array<{icon: SocialMediaType; image?: string; name: string; href: string}>;
        };
    };
}

const appConfig: Configuration = {
    settings: {
        isDark: false,
        isPublic: true,
    },
    components: {
        header: {
            title: i18n.t('header.title'),
            logo: {
                title: APP_NAME,
                image: '/images/logo.svg',
            },
        },
        carousel: {
            items: [
                {
                    title: i18n.t('banner.0.title'),
                    href: getMobileAppLink(),
                    children: SLIDE_1,
                },
            ],
        },
        menu: {
            items: [
                {
                    title: i18n.t('menu.items.0.title'),
                    href: i18n.t('menu.items.0.href'),
                    // large: false
                },
                {
                    title: i18n.t('menu.items.1.title'),
                    href: i18n.t('menu.items.1.href'),
                    // large: false
                },
            ],
        },
        rate: {
            title: i18n.t('rate.title'),
            subtitle: i18n.t('rate.subtitle'),
            wantedRate: 4, // min rate
        },
        tips: {
            title: i18n.t('tips.title'),
            subtitle: i18n.t('tips.subtitle'),
            href: 'https://netmonet.co/tip/group/525781/users/1?o=0',
            button: i18n.t('tips.button'),
        },
        contact: {
            title: i18n.t('contact.title'),
            subtitle: i18n.t('contact.subtitle'),
            items: [
                {
                    type: 'telegram',
                    href: 'https://t.me',
                },
                {
                    type: 'whatsapp',
                    href: 'https://wa.me',
                },
            ],
        },
    },
    modal: {
        form: {
            title: i18n.t('modal.form.title'),
            place: {
                name: i18n.t('modal.form.place.name'),
                address: i18n.t('modal.form.place.address'),
                image: 'https://avatars.mds.yandex.net/get-altay/9114271/2a000001901245bbeac2ac49c5635c100a83/L',
            },
            textarea: i18n.t('modal.form.textarea'),
            aspects: i18n.t('modal.form.aspects').split(';'),
            submit: i18n.t('modal.form.submit'),
        },
        rate: {
            title: i18n.t('modal.rate.title'),
            items: [
                {
                    icon: 'telegram',
                    name: 'Telegram',
                    href: 'https://t.me',
                },
                {
                    icon: 'whatsapp',
                    name: 'WhatsApp',
                    href: 'https://wa.me',
                },
                {
                    icon: 'yandex',
                    name: 'Yandex',
                    href: 'https://maps.yandex.ru',
                },
                {
                    icon: 'google-maps',
                    name: 'Google Maps',
                    href: 'https://maps.google.com',
                },
            ],
            submit: i18n.t('modal.rate.submit'),
        },
    },
};

export default appConfig;
