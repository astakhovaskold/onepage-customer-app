import {ReactNode} from 'react';

import {SocialMediaType} from '@/app/components/SocialMediaIcon/types';

export interface Configuration {
    settings: {baseURL: string; isDark: boolean; isPublic: boolean};
    components: {
        rate: {subtitle: string; wantedRate: number; title: string};
        contact: {
            subtitle: string;
            title: string;
            items: Array<{href: string; icon: string}>;
        };
        header: {title?: ReactNode; logo: {image: string; title: string}};
        carousel: {items: Array<{children: ReactNode; href: string; title: string}>};
        menu?: {items: Array<{href: string; title: string}>};
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

export interface Theme {
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
