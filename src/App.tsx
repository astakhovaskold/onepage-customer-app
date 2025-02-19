import {memo, Suspense, useEffect} from 'react';

import '@/styles/main.css';
import '@/assets/fonts/fonts.css?url';

import AxiosInterceptorMessage from '@/app/components/Presentation/AxiosInterceptorMessage';
import SuspenseLoader from '@/app/components/Presentation/SuspenseLoader';

import GoogleFontLoader from '@/app/components/Utils/GoogleFontsLoader';
import Home from '@/app/pages/Home';
import appConfig from '@/configuration/appConfig';
import appTheme from '@/configuration/appTheme';

import bootstrap from '@/libs/mockApi';

const App = memo((): JSX.Element | null => {
    useEffect(() => {
        if (import.meta.env.DEV) {
            bootstrap();
        }

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

            <Suspense fallback={<SuspenseLoader />}>
                <AxiosInterceptorMessage />
            </Suspense>

            <Home />
        </div>
    );
});

export default App;
