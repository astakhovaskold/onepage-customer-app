import styled from '@emotion/styled';
import {memo} from 'react';

import BodyPortal from '../Utils/BodyPortal';

const Container = styled.span`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    height: 3px;
    background: gainsboro linear-gradient(to right, red, blue);
    animation:
        2s linear infinite LoadingBarProgress,
        0.5s ease-out LoadingBarEnter;
    transform-origin: left;

    z-index: 10;
    pointer-events: none;
    touch-action: none;

    @keyframes LoadingBarProgress {
        from {
            background-position: 0 0;
        }

        to {
            background-position: 125% 0;
        }
    }

    @keyframes LoadingBarEnter {
        from {
            transform: scaleX(0);
        }

        to {
            transform: scaleX(1);
        }
    }
`;

const SuspenseLoader = memo(() => {
    return (
        <BodyPortal>
            <Container />
        </BodyPortal>
    );
});

export default SuspenseLoader;
