import {ReactNode} from 'react';

import {SocialMediaType} from '@/app/components/SocialMediaIcon/types';
import {getMobileAppLink} from '@/app/modules/home/utils';
import {SLIDE_1} from '@/configuration/slides';
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
            submit: string;
            aspects: Array<string>;
            place: {image: string; address: string; name: string};
            title: string;
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
            title: 'Ресторан ДеДа Хинкали на Караванной',
            logo: {
                title: APP_NAME,
                image: '/images/logo.svg',
            },
        },
        carousel: {
            items: [
                {
                    title: 'Система лояльности',
                    href: getMobileAppLink(),
                    children: SLIDE_1,
                },
            ],
        },
        menu: {
            items: [
                {
                    title: 'Барное меню',
                    href: 'https://white-group.ru/upload/iblock/4ee/4ee8e2aa9f21f27ae0dd8d83317576e2.pdf',
                    // large: false
                },
                {
                    title: 'Основное меню',
                    href: 'https://white-group.ru/upload/iblock/2f1/2f1dd267dd32258ef29b702851fafc55.pdf',
                    // large: false
                },
            ],
        },
        rate: {
            title: 'Оставить отзыв',
            subtitle: 'Оцените заведение, пожалуйста',
            wantedRate: 4, // min rate
        },
        tips: {
            title: 'Оставить чаевые',
            subtitle: 'Вам понравилось обслуживание?',
            href: 'https://netmonet.co/tip/group/525781/users/1?o=0',
            button: 'Оставить чаевые',
        },
        contact: {
            title: 'Написать руководителю',
            subtitle: 'Столкнулись с неприятной ситуацией?',
            items: [
                {
                    type: 'telegram',
                    href: '',
                },
                {
                    type: 'whatsapp',
                    href: '',
                },
            ],
        },
    },
    modal: {
        form: {
            title: 'Как вам это место?',
            place: {
                name: 'Деда Хинкали',
                address: 'ул. Караванная 2',
                image: 'https://avatars.mds.yandex.net/get-altay/9114271/2a000001901245bbeac2ac49c5635c100a83/L',
            },
            aspects: ['Еда', 'Кухня', 'Обслуживание', 'Персонал', 'Атмосфера', 'Официанты'],
            submit: 'Сохранить',
        },
        rate: {
            title: 'Выберите площадку',
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
            submit: 'Готово',
        },
    },
};

export default appConfig;
