import {Button, Result} from 'antd';
import {memo} from 'react';

const CommonError = memo((): JSX.Element | null => {
    return (
        <Result
            status="error"
            title="Oops! Something Went Wrong"
            subTitle="An unexpected error has occurred. Please try refreshing the page or return to the home page to continue."
            extra={
                <Button type="primary" onClick={() => history.back()}>
                    Return to Home Page
                </Button>
            }
        />
    );
});

export default CommonError;
