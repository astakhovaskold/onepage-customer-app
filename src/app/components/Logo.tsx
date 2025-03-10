import clsx from 'clsx';
import {memo} from 'react';

import appConfig from '@/configuration/appConfig';
import {APP_NAME} from '@/libs/text';

interface LogoProps {
    collapsed?: boolean;
    className?: string;
}

const Logo = memo<LogoProps>(({collapsed = false, className}): JSX.Element | null => {
    const {title, image} = appConfig.components.header.logo;

    return (
        <a
            href={appConfig.settings.baseURL}
            className={clsx(
                'text-2xl text-black hover:text-black hover:opacity-80 font-bold basis-[48px]',
                {
                    'text-center': collapsed,
                },
                className,
            )}
        >
            {image ? <img src={image} alt={title} title={title} width="48" height="48" /> : APP_NAME}
        </a>
    );
});

export default Logo;
