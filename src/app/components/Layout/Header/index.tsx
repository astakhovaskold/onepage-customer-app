import clsx from 'clsx';
import {memo} from 'react';

import Logo from '@/app/components/Logo';
import appConfig from '@/configuration/appConfig';

const {title} = appConfig.components.header;

const Header = memo((): JSX.Element | null => {
    return (
        <header className="min-h-16 py-2.5 px-6 border-b border-b-1 border-b-gray flex items-center justify-center">
            <div
                className={clsx('flex items-center gap-x-4', {
                    'justify-between': !!title,
                })}
            >
                <Logo />

                {title && <h1 className="text-text">{title}</h1>}
            </div>
        </header>
    );
});

export default Header;
