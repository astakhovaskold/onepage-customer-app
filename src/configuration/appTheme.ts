// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import {Theme} from '@/configuration/types';

const appThemeBase: Omit<Theme, 'token' | 'extend'> = {
    color: {
        primary: '#d8c2a4',
        secondary: '#f9f6f0',
        accent: '#60fb07',
        text: '#000000',

        background: '#FAFAFA',
        'background-hover': '#DADADA',

        border: 'none',

        rate: '#fc0',
    },
    fontFamily: {
        primary: 'Inter',
        secondary: 'Inter',
        text: 'Inter',
    },
    fontSize: {
        common: 14,
    },
    shape: {
        rounded: 16,
        bordered: '', // sm, lg, xl, xl
        boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.15)',
    },
    layout: {
        gap: '0.75rem', // css
        spacing: '', // css
    },
};

const appTheme: Theme = {
    ...appThemeBase,
    token: {
        base: {
            banner: {
                fontSize: 18,
                fontWeight: 700,
                fontFamily: appThemeBase.fontFamily.primary,
                color: appThemeBase.color.text,
            },
        },
        components: {
            common: {
                background: appThemeBase.color.secondary,
                'background-hover': appThemeBase.color.secondary,
                spacing: appThemeBase.layout.spacing,
                gap: appThemeBase.layout.gap,
                rounded: appThemeBase.shape.rounded,
                bordered: appThemeBase.shape.bordered,
                boxShadow: appThemeBase.shape.boxShadow,
            },
            header: {
                title: {
                    fontSize: 16,
                    fontWeight: 400,
                    fontFamily: appThemeBase.fontFamily.primary,
                    color: appThemeBase.color.text,
                },
                subtitle: {
                    fontSize: 12,
                    fontWeight: 400,
                    fontFamily: appThemeBase.fontFamily.primary,
                    color: 'rgba(0, 0, 0, 0.7)',
                },
            },
            modal: {
                form: {
                    background: '#f6f6f6',
                    layout: {
                        spacing: appThemeBase.layout.spacing,
                        gap: appThemeBase.layout.gap,
                    },
                    block: {
                        background: appThemeBase.color.background,
                    },
                    button: {
                        background: '#196dff',
                        color: '#ffffff',
                        size: 'middle', // small, middle, large
                        placement: 'start', // start, end
                        rounded: 12,
                    },
                },
                rate: {
                    button: {
                        background: appThemeBase.color.primary,
                        color: appThemeBase.color.text,
                        size: 'middle', // small, middle, large
                        placement: 'end', // start, end
                        rounded: 12,
                    },
                },
            },
            tips: {
                button: {
                    background: 'radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #F0EBE5 100%)',
                    color: appThemeBase.color.text,
                    size: 'large',
                },
            },
        },
    },
    extend: {},
};

export default appTheme;
