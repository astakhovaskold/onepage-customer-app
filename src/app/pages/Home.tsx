import {Space} from 'antd';
import {memo} from 'react';

import WideContainer from '@/app/components/Layout/WideContainer';
import Title from '@/app/components/Utils/Title';
import {APP_NAME} from '@/libs/text';

const Home = memo((): JSX.Element | null => {
    return (
        <>
            <Title value="Welcome" />

            <WideContainer>
                <div className="w-[848px] mx-auto flex flex-col gap-y-10 text-black font-semibold">
                    <Space direction="vertical" size={8}>
                        <p className="text-xl">welcome to&nbsp;{APP_NAME}!</p>
                    </Space>
                </div>
            </WideContainer>
        </>
    );
});

export default Home;
