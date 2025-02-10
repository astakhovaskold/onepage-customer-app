import {APP_NAME} from '@/libs/text';

const config = {
    settings: {
        isDark: false,
        isPublic: true,
    },
    components: {
        header: {
            logo: {
                title: APP_NAME,
                image: '/images/logo.svg',
            },
        },
        carousel: {
            items: [
                {
                    title: 'Булки',
                    alt: '',
                    image: '/images/carousel/c-1.png',
                    href: 'https://white-group.ru',
                },
                {
                    title: 'Мясо',
                    alt: '',
                    image: '/images/carousel/c-2.png',
                },
            ],
        },
    },
};

export default config;
