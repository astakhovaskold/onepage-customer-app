import {lazy} from 'react';

import Auth from '@/app/pages/Auth';
import Home from '@/app/pages/Home';
import config from '@/configuration/config';
import {RouteItem} from '@/router/types';

const Unauthorized = lazy(() => import('@/app/pages/error/Unauthorized'));

const modules: Array<RouteItem> = [];

export const routes: Array<RouteItem> = [
    {
        path: 'auth',
        component: Auth,
        restrictedWithAuth: true,
        isPublic: true,
    },
    {
        path: '/',
        component: Home,
        isPublic: config.settings.isPublic,
    },
    {
        path: 'unauthorized',
        component: Unauthorized,
        isPublic: true,
    },
    ...modules,
];
