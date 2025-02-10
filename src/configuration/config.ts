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
    },
};

export default config;
