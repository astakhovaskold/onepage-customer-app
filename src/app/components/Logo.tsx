import clsx from 'clsx';
import {memo} from 'react';
import {Link} from 'react-router-dom';

import config from '@/configuration/config';
import {APP_NAME} from '@/libs/text';

interface LogoProps {
    collapsed?: boolean;
    className?: string;
}

const Logo = memo<LogoProps>(({collapsed = false, className}): JSX.Element | null => {
    const {title, image} = config.components.header.logo;

    return (
        <Link
            to="/"
            className={clsx(
                'text-2xl text-black hover:text-black hover:opacity-80 font-bold',
                {
                    'text-center': collapsed,
                },
                className,
            )}
        >
            {image ? <img src={image} alt={title} title={title} width="48" height="48" /> : APP_NAME}
        </Link>
    );
});

export default Logo;
