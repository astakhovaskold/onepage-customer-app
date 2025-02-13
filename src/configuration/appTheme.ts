// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

interface Theme {
    layout: {spacing: string; gap: string};
    extend: Record<string, unknown>;
    color: {
        secondary: string;
        border: string;
        background: string;
        'background-hover': string;
        accent: string;
        primary: string;
        text: string;
        rate: string;
    };
    shape: {rounded: string; bordered: string; boxShadow: string};
    fontFamily: {secondary: string; text: string; primary: string};
    fontSize: {common: number};
    token: {
        base: {
            banner: {fontFamily: string; fontSize: string; fontWeight: string; color: string};
        };
        components: {
            common: {
                spacing: string;
                background: string;
                'background-hover': string;
                gap: string;
                rounded: string;
                bordered: string;
                boxShadow: string;
            };
            header: {
                subtitle: {fontFamily: string; fontSize: string; fontWeight: string; color: string};
                title: {fontFamily: string; fontSize: string; fontWeight: string; color: string};
            };
            modal: {
                form: {
                    background: string;
                    layout: {spacing: string; gap: string};
                    button: {
                        size: 'small' | 'middle' | 'large';
                        background: string;
                        placement: 'start' | 'end';
                        color: string;
                        rounded: string;
                    };
                    block: {background: string};
                };
                rate: {
                    button: {
                        size: 'small' | 'middle' | 'large';
                        background: string;
                        placement: 'start' | 'end';
                        rounded: string;
                        color: string;
                    };
                };
            };
            tips: {
                button: {
                    background: string;
                    size: 'small' | 'middle' | 'large';
                    color: string;
                };
            };
        };
    };
}

const appThemeBase: Omit<Theme, 'token' | 'extend'> = {
    color: {
        primary: '#d8c2a4',
        secondary: '#FAFAFA',
        accent: '#60fb07',
        text: '#000000',

        background: '#FFFFFF',
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
