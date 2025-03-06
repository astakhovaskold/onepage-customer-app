/** @type {import('tailwindcss').Config} */
import type {Config} from 'tailwindcss';

import plugin from 'tailwindcss/plugin';

import appTheme from './src/configuration/appTheme';

const {fontFamily, fontSize, color, layout, shape, token} = appTheme;

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'selector',
    theme: {
        container: {
            padding: '1rem 1.5rem 0',
        },
        screens: {
            xs: '360px',
            sm: '576px',
            md: '768px',
            lg: '1200px',
        },
        fontFamily: {
            primary: [fontFamily.primary, 'sans-serif'],
            secondary: [fontFamily.secondary, 'Helvetica Neue', 'Helvetica', 'sans-serif'],
        },
        colors: {
            white: {
                DEFAULT: 'var(--color-white)',
                650: 'var(--color-white-650)',
            },
            black: {
                DEFAULT: 'var(--color-black)',
            },
            gray: {
                DEFAULT: 'var(--color-gray)',
            },
            blue: {
                DEFAULT: 'var(--color-blue)',
            },
            light: 'var(--color-light)',
        },
        extend: {
            colors: {
                primary: color.primary,
                secondary: color.secondary,
                accent: color.accent,
                text: color.text,

                border: color.border,

                background: color.background,
                'background-hover': color['background-hover'],

                'rate-star': color.rate,

                'component-title-color': token.components.header.title.color,
                'component-subtitle-color': token.components.header.subtitle.color,

                'component-background': token.components.common.background,
                'component-background-hover': token.components.common['background-hover'],

                'form-background': token.components.modal.form.background,
                'form-block-background': token.components.modal.form.block.background,
                'form-button-background': token.components.modal.form.button.background,
                'form-button-color': token.components.modal.form.button.color,

                'rate-button-background': token.components.modal.rate.button.background,
                'rate-button-color': token.components.modal.rate.button.color,

                'app-button-background': token.components.app.button.background,
                'app-button-color': token.components.app.button.color,

                processing: 'var(--color-processing)',
                success: 'var(--color-success)',
                warning: 'var(--color-warning)',
                error: 'var(--color-error)',
                closed: 'var(--color-closed)',
            },
            backgroundImage: {
                'app-button-background-gradient': token.components.app.button.background,
            },
            fontSize: {
                common: fontSize.common as unknown as string,

                'banner-title': token.base.banner.fontSize,

                'component-title': token.components.header.title.fontSize,
                'component-subtitle': token.components.header.subtitle.fontSize,
            },
            fontWeight: {
                'banner-title': token.base.banner.fontWeight,

                'component-title': token.components.header.title.fontWeight,
                'component-subtitle': token.components.header.subtitle.fontWeight,
            },
            gap: {
                layout: layout.gap,
                'form-layout': token.components.modal.form.layout.gap,
                'component-layout': token.components.common.gap,
            },
            borderRadius: {
                common: shape.rounded,

                'form-button': token.components.modal.form.button.rounded,
                'rate-button': token.components.modal.rate.button.rounded,
            },
            boxShadow: {
                component: appTheme.shape.boxShadow,

                button: appTheme.shape.boxShadow,
            },
        },
    },
    plugins: [
        // require('@tailwindcss/aspect-ratio'),
        plugin(({addUtilities}) => {
            addUtilities({
                '.fill-transparent': {
                    '& svg': {
                        fill: 'transparent !important',
                        stroke: 'currentColor !important',
                    },
                },
                '.stroke-transparent': {
                    '& svg': {
                        fill: 'currentColor !important',
                        stroke: 'transparent !important',
                    },
                },
                '.color-inherit': {
                    color: 'inherit',
                },
                '.container-free': {
                    width: '0px',
                    '@media (min-width: 576px)': {
                        width: 'calc((100vw - 576px) / 2)',
                    },
                    '@media (min-width: 768px)': {
                        width: 'calc((100vw - 768px) / 2)',
                    },
                    '@media (min-width: 992px)': {
                        width: 'calc((100vw - 992px) / 2)',
                    },
                    '@media (min-width: 1200px)': {
                        width: 'calc((100vw - 1200px) / 2)',
                    },
                    // '@media (min-width: 1400px)': {
                    //     width: 'calc((100vw - 1400px) / 2)',
                    // },
                },
                '.hidden-scrollbar': {
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    '-ms-overflow-style': 'none' /* IE and Edge */,
                    'scrollbar-width': 'none' /* Firefox */,
                },
                '.text-stroke': {
                    '&-primary': {
                        '-webkit-text-fill-color': 'transparent',
                        '-webkit-text-stroke-width': '1px',
                        '-webkit-text-stroke-color': 'var(--color-primary)',
                    },
                },
            });
        }),
    ],
};

export default config;
