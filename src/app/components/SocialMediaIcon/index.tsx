import Icon from '@ant-design/icons';
import clsx from 'clsx';
import {memo, useMemo} from 'react';

import {SocialMediaType} from '@/app/components/SocialMediaIcon/types';
import GisIcon from '@/assets/icons/social/2gis.svg?react';
import GoogleMapsIcon from '@/assets/icons/social/google-maps.svg?react';
import TelegramIcon from '@/assets/icons/social/telegram.svg?react';
import TripadvisorIcon from '@/assets/icons/social/tripadvisor.svg?react';
import WhatsappIcon from '@/assets/icons/social/whatsapp.svg?react';
import YandexIcon from '@/assets/icons/social/yandex.svg?react';

interface SocialMediaIconProps {
    type: SocialMediaType;
    size?: 'small' | 'large';
}

const SocialMediaIcon = memo<SocialMediaIconProps>(({type, size}): JSX.Element | null => {
    const icon = useMemo(() => {
        switch (type) {
            case 'telegram':
                return TelegramIcon;
            case 'whatsapp':
                return WhatsappIcon;
            case 'tripadvisor':
                return TripadvisorIcon;
            case '2gis':
                return GisIcon;
            case 'google-maps':
                return GoogleMapsIcon;
            case 'yandex':
                return YandexIcon;
        }
    }, [type]);

    return (
        <Icon
            component={icon}
            className={clsx({
                'text-6xl': size === 'large',
                'text-4xl': size === 'small',
                'text-5xl': size === undefined,
            })}
        />
    );
});

export default SocialMediaIcon;
