import {memo} from 'react';

import QuickMenu from '@/app/components/QuickMenu';
import config from '@/configuration/config';

interface MenuProps {}

const HomeMenu = memo<MenuProps>((): JSX.Element | null => {
    const {items} = config.components.menu;

    return <QuickMenu items={items} />;
});

export default HomeMenu;
