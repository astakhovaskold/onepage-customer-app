import {memo, Suspense, useEffect} from 'react';
import {Outlet} from 'react-router';

import '@/styles/main.css';
import '@/assets/fonts/fonts.css?url';

import AxiosInterceptorMessage from '@/app/components/Presentation/AxiosInterceptorMessage';
import SuspenseLoader from '@/app/components/Presentation/SuspenseLoader';
import AxiosInterceptorAccess from '@/app/components/Utils/AxiosInterceptorAccess';

import config from '@/configuration/config';
import bootstrap from '@/libs/mockApi';

const App = memo((): JSX.Element | null => {
    useEffect(() => {
        bootstrap();

        if (config.settings.isDark) {
            document.getElementsByTagName('HTML')[0].classList.add('dark');
        }
    }, []);

    return (
        <div className="bg-white dark:invert">
            <AxiosInterceptorAccess />

            <Suspense fallback={<SuspenseLoader />}>
                <AxiosInterceptorMessage />
            </Suspense>

            <Outlet />
        </div>
    );
});

export default App;
