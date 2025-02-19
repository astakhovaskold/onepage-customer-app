import {QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {ConfigProvider} from 'antd';
import enUS from 'antd/locale/en_US';
import dayjs from 'dayjs';
// eslint-disable-next-line no-restricted-imports
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import 'dayjs/locale/en';

import queryClient from './libs/queryClient';
import validateMessages from './libs/validateMessages';
import themeConfig from './styles/themeConfig';

import App from '@/App';

dayjs.locale('ru');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ConfigProvider theme={themeConfig} locale={enUS} form={{validateMessages}}>
                <App />
            </ConfigProvider>

            {import.meta.env.DEV && <ReactQueryDevtools />}
        </QueryClientProvider>
    </StrictMode>,
);
