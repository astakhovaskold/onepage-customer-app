import {notification} from 'antd';
import axios from 'axios';
import {FC, memo, useEffect} from 'react';

import Utils from '@/libs/Utils';

const AxiosInterceptorMessage: FC = memo((): JSX.Element | null => {
    useEffect(() => {
        const interceptor = axios.interceptors.response.use(
            response => {
                return response;
            },
            error => {
                if (error?.response?.status >= 400) {
                    notification.error({
                        message: 'Error',
                        description: Utils.textError(error),
                    });
                }

                return Promise.reject(error);
            },
        );

        return () => {
            axios.interceptors.response.eject(interceptor);
        };
    }, []);

    return null;
});

export default AxiosInterceptorMessage;
