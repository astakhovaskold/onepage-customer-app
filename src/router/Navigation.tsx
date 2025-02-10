import {memo, Suspense} from 'react';
import {createRoutesFromElements, Route, RouterProvider} from 'react-router';

import {createBrowserRouter} from 'react-router-dom';

import App from '../App';

import {RouteGuard} from './RouteGuard';

import SuspenseLoader from '@/app/components/Presentation/SuspenseLoader';
import ErrorBoundary from '@/app/components/Utils/ErrorBoundary';
import {routes} from '@/router/routes';

const Navigation = memo(() => {
    return (
        <RouterProvider
            router={createBrowserRouter(
                createRoutesFromElements(
                    <Route key="parent" path="/" element={<App />} errorElement={<ErrorBoundary />} hasErrorBoundary>
                        {routes.map(({path, title, component: Component, ...guardProps}) => {
                            const {restrictedWithAuth, isPublic, roles} = guardProps;

                            const key = path === '/' ? path : `/${path}`;

                            const isProtected = !isPublic || restrictedWithAuth || roles;

                            const children = (
                                <Route
                                    key={key}
                                    path={key}
                                    element={
                                        <Suspense fallback={<SuspenseLoader />}>
                                            <Component />
                                        </Suspense>
                                    }
                                />
                            );

                            if (!isProtected) return children;

                            return (
                                <Route key={key} element={<RouteGuard title={title} {...guardProps} />}>
                                    {children}
                                </Route>
                            );
                        })}
                    </Route>,
                ),
            )}
        />
    );
});

export default Navigation;
