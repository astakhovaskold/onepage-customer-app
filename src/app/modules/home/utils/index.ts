import Utils from '@/libs/Utils';

export const getAppLink = () =>
    Utils.detectIos(navigator.userAgent)
        ? 'https://apps.apple.com/ru/app/white-group-club/id6474615241'
        : 'https://play.google.com/store/apps/details?id=ru.premiumbonus.whitegroup&#10240';
