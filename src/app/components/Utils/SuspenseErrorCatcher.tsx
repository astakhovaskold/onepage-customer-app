import styled from '@emotion/styled';
import {Component, PropsWithChildren} from 'react';

import BodyPortal from './BodyPortal';

interface State {
    isChunkError: boolean;
    error?: Error;
}

const Code = styled.pre`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    margin: 0;
    padding: 1rem;
    background-color: darkred;
    color: #ffffff;
    z-index: 2000;
`;

class SuspenseErrorCatcher extends Component<PropsWithChildren<Record<string, unknown>>, State> {
    constructor(props: PropsWithChildren<Record<string, unknown>>) {
        super(props);

        this.state = {
            isChunkError: false,
            error: undefined,
        };
    }

    static getDerivedStateFromError(error: Error) {
        return {
            error: error?.message,
        };
    }

    // componentDidCatch(error, info) {
    // info.componentStack
    // }

    render() {
        const {children} = this.props;
        const {isChunkError, error} = this.state;

        if (error && !isChunkError) {
            return (
                <BodyPortal>
                    <Code>{error.toString()}</Code>
                </BodyPortal>
            );
        }

        return children;
    }
}

export default SuspenseErrorCatcher;
