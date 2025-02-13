import {RcFile} from 'antd/es/upload';

import {AxiosError} from 'axios';

import {ROLES, UserDTO} from '@/store/account/types';

export interface ServerError {
    message: string;
    // errors: Record<string, string>;
}

type Exp = string | AxiosError<ServerError> | Error;

export default class Utils {
    static hasAccess(user: UserDTO, roles: Array<ROLES> = []): boolean {
        return user && (roles.length === 0 || roles.some(role => role === user.role));
    }

    static textError(exp: Exp): string {
        if (typeof exp === 'string') return exp;

        if (exp instanceof Error && !(exp as AxiosError).isAxiosError) return exp.message;

        const {status = null, data = null} = (exp as AxiosError<ServerError>).response ?? {};

        let text = 'The request could not be processed or fulfilled';

        if (status && [403, 404, 500].includes(status)) {
            switch (status) {
                case 403:
                    return 'No access rights';
                case 404:
                    return 'Try fulfilling your request in a different way';
                case 500:
                    return 'The action cannot be performed at this time. Please try again later.';
            }
        } else if (data) {
            // if ('errors' in data) {
            //     text = Object.entries(data.errors)
            //         .map(([key, value]) => `${key}: ${value}`)
            //         .join('; ');
            // }

            if ('message' in data && data.message) {
                text = data.message;
            }
        }

        return text;
    }

    static getBase64 = <T = RcFile>(file: T, callback: (url: string) => void): void | boolean => {
        if (!(file instanceof Blob)) return false;

        const objectURL = URL.createObjectURL(file);

        callback(objectURL);
    };

    static getURLFromBuffer = (buffer: ArrayBuffer, type: string) => {
        const arrayBufferView = new Uint8Array(buffer);

        const blob = new Blob([arrayBufferView], {type});
        const url = URL.createObjectURL(blob);

        return url;
    };

    static isLargerThanMB = (file: RcFile, limit: number): boolean => {
        return file.size / 1024 / 1024 < limit;
    };

    static isAcceptAllowed = (file: RcFile): boolean => {
        const accept = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp', 'image/gif', 'video/mp4', 'video/webm'];
        return accept.includes(file.type);
    };

    static on<T extends Window | Document | HTMLElement | EventTarget>(
        obj: T | null,
        // eslint-disable-next-line @typescript-eslint/ban-types
        ...args: Parameters<T['addEventListener']> | [string, Function | null, ...Array<unknown>]
    ): void {
        if (obj && obj.addEventListener) {
            obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>));
        }
    }

    static off<T extends Window | Document | HTMLElement | EventTarget>(
        obj: T | null,
        // eslint-disable-next-line @typescript-eslint/ban-types
        ...args: Parameters<T['removeEventListener']> | [string, Function | null, ...Array<unknown>]
    ): void {
        if (obj && obj.removeEventListener) {
            obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>));
        }
    }

    static currencyFormat = (number: number, currency: string, fraction = false, locale = 'gb') =>
        number.toLocaleString(locale, {
            style: 'currency',
            currency,
            currencyDisplay: 'code',
            localeMatcher: 'best fit',
            minimumFractionDigits: 0,
            maximumFractionDigits: fraction ? 2 : 0,
        });

    static isBrowser = typeof window !== 'undefined';

    static isNavigator = typeof navigator !== 'undefined';

    static detectMobile(userAgent?: string): boolean {
        if (typeof userAgent !== 'string') return false;

        return new RegExp('(iPhone|iPad|Android|Mobile)', 'gi').test(userAgent);
    }

    static detectIos(userAgent?: string): boolean {
        if (typeof userAgent !== 'string') return false;

        return new RegExp('(iPad|iPhone|iPod)', 'gi').test(userAgent);
    }

    static getFileExtension(filename: string) {
        const parts = filename.split('.');
        if (parts.length > 1) {
            return '.' + parts.pop()?.toLowerCase();
        }
        return '';
    }
}
