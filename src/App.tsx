import {memo, Suspense, useEffect} from 'react';
import {Outlet} from 'react-router';

import '@/styles/main.css';
import '@/assets/fonts/fonts.css?url';

import AxiosInterceptorMessage from '@/app/components/Presentation/AxiosInterceptorMessage';
import SuspenseLoader from '@/app/components/Presentation/SuspenseLoader';
import AxiosInterceptorAccess from '@/app/components/Utils/AxiosInterceptorAccess';

import bootstrap from '@/libs/mockApi';

const App = memo((): JSX.Element | null => {
    useEffect(() => {
        bootstrap();
    }, []);

    return (
        <>
            <AxiosInterceptorAccess />

            <Suspense fallback={<SuspenseLoader />}>
                <AxiosInterceptorMessage />
            </Suspense>

            <Outlet />
        </>
    );
});

export default App;
