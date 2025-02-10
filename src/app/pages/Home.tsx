import {Space} from 'antd';
import {memo} from 'react';

import MobileContainer from '@/app/components/Layout/MobileContainer';
import Title from '@/app/components/Utils/Title';
import {APP_NAME} from '@/libs/text';

const Home = memo((): JSX.Element | null => {
    return (
        <>
            <Title value="Welcome" />

            <MobileContainer>
                <div className="w-[848px] mx-auto flex flex-col gap-y-10 text-black font-semibold">
                    <Space direction="vertical" size={8}>
                        <p className="text-xl">welcome to&nbsp;{APP_NAME}!</p>
                    </Space>
                </div>
            </MobileContainer>
        </>
    );
});

export default Home;
