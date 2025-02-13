import {memo, Suspense, useEffect} from 'react';
import {Outlet} from 'react-router';

import '@/styles/main.css';
import '@/assets/fonts/fonts.css?url';

import AxiosInterceptorMessage from '@/app/components/Presentation/AxiosInterceptorMessage';
import SuspenseLoader from '@/app/components/Presentation/SuspenseLoader';
import AxiosInterceptorAccess from '@/app/components/Utils/AxiosInterceptorAccess';

import GoogleFontLoader from '@/app/components/Utils/GoogleFontsLoader';
import appConfig from '@/configuration/appConfig';
import appTheme from '@/configuration/appTheme';
import bootstrap from '@/libs/mockApi';

const App = memo((): JSX.Element | null => {
    useEffect(() => {
        bootstrap();

        if (appConfig.settings.isDark) {
            document.getElementsByTagName('HTML')[0].classList.add('dark');
        }
    }, []);

    return (
        <div className="bg-background font-text ">
            {Array.from(new Set(Object.values(appTheme.fontFamily))).map(font => {
                if (!font) return null;

                return <GoogleFontLoader key={font} fontFamily={font} display="swap" />;
            })}

            <AxiosInterceptorAccess />

            <Suspense fallback={<SuspenseLoader />}>
                <AxiosInterceptorMessage />
            </Suspense>

            <Outlet />
        </div>
    );
});

export default App;
