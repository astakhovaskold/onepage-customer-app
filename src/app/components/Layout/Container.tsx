import {Layout} from 'antd';
import clsx from 'clsx';
import {memo, PropsWithChildren} from 'react';

import Header from '@/app/components/Layout/Header';

import {useAuth} from '@/hooks/useAuth';

interface ContainerProps {
    className?: string;
}

const {Content} = Layout;

const Container = memo<PropsWithChildren<ContainerProps>>(({className, children}): JSX.Element | null => {
    const isAuth = useAuth();

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Layout>
                {isAuth && <Header />}

                <Content className={clsx('px-5 py-4', className)}>{children}</Content>
            </Layout>
        </Layout>
    );
});

export default Container;
