import {memo} from 'react';

import MobileContainer from '@/app/components/Layout/MobileContainer';
import QuickMenu from '@/app/components/QuickMenu';
import Title from '@/app/components/Utils/Title';
import HomeCarousel from '@/app/modules/home/HomeCarousel';

const Home = memo((): JSX.Element | null => {
    return (
        <>
            <Title value="Welcome" />

            <MobileContainer>
                <div className="flex flex-col gap-y-4 text-black font-semibold">
                    <HomeCarousel />

                    <QuickMenu
                        items={[
                            {
                                title: 'Напитки',
                            },
                            {
                                title: 'Меню',
                                featured: true,
                            },
                            {
                                title: 'Алкоголь',
                            },
                        ]}
                    />
                </div>
            </MobileContainer>
        </>
    );
});

export default Home;
