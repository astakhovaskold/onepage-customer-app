import {memo} from 'react';

import MobileContainer from '@/app/components/Layout/MobileContainer';
import Title from '@/app/components/Utils/Title';
import ContactUs from '@/app/modules/home/ContactUs';
import HomeCarousel from '@/app/modules/home/HomeCarousel';
import HomeMenu from '@/app/modules/home/HomeMenu';
import RateUs from '@/app/modules/home/RateUs';
import Tips from '@/app/modules/home/Tips';

const Home = memo((): JSX.Element | null => {
    return (
        <>
            <Title value="Welcome" />

            <MobileContainer>
                <div className="flex flex-col gap-y-3 text-black font-semibold">
                    <HomeCarousel />

                    <HomeMenu />

                    <RateUs />

                    <Tips />

                    <ContactUs />
                </div>
            </MobileContainer>
        </>
    );
});

export default Home;
