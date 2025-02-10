import {memo, PropsWithChildren} from 'react';

import Container from '@/app/components/Layout/Container';
import Header from '@/app/components/Layout/Header';

const MobileContainer = memo<PropsWithChildren>(({children}): JSX.Element | null => {
    return (
        <>
            <Header />

            <Container>{children}</Container>
        </>
    );
});

export default MobileContainer;
