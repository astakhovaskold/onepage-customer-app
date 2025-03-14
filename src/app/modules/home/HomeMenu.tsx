import {memo} from 'react';

import QuickMenu from '@/app/components/QuickMenu';
import appConfig from '@/configuration/appConfig';

const HomeMenu = memo((): JSX.Element | null => {
    const {items} = appConfig.components.menu || {};

    if (!items) return null;

    return <QuickMenu items={items} />;
});

export default HomeMenu;
