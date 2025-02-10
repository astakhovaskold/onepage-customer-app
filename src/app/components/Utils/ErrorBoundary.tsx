import styled from '@emotion/styled';
import {Typography} from 'antd';
import {isRouteErrorResponse, useRouteError} from 'react-router-dom';

import BodyPortal from '@/app/components/Utils/BodyPortal';
import CommonError from '@/app/pages/error/CommonError';

const {Title} = Typography;

const Code = styled.pre`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    white-space: pre-wrap;
    padding: 2rem;
    background-color: darkred;
    color: #ffffff;
    z-index: 2000;
`;

function ErrorBoundary() {
    const error = useRouteError();

    const isProduction = import.meta.env.PROD;

    if (isProduction) return <CommonError />;

    if (isRouteErrorResponse(error)) {
        return (
            <>
                <h1>
                    {error.status} {error.statusText}
                </h1>

                <p>{error.data}</p>
            </>
        );
    } else if (error instanceof Error) {
        return (
            <BodyPortal>
                <Title>An error accured</Title>

                <Code>{error.stack}</Code>
            </BodyPortal>
        );
    } else {
        return (
            <BodyPortal>
                <Code>Unknown Error</Code>
            </BodyPortal>
        );
    }
}

export default ErrorBoundary;
