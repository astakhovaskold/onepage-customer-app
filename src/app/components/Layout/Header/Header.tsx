import {memo} from 'react';

import Logo from '@/app/components/Logo';

const Header = memo((): JSX.Element | null => {
    return (
        <header className="min-h-16 py-2.5 px-6 border-b border-b-1 border-b-gray flex items-center justify-end">
            <div className="flex items-center gap-x-4">
                <Logo />
            </div>
        </header>
    );
});

export default Header;
