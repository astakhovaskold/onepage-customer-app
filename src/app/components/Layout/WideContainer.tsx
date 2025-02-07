import {memo, PropsWithChildren} from 'react';

import Container from '@/app/components/Layout/Container';

const WideContainer = memo<PropsWithChildren>(({children}): JSX.Element | null => {
    return <Container>{children}</Container>;
});

export default WideContainer;
