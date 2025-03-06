import {memo} from 'react';

import MobileContainer from '@/app/components/Layout/MobileContainer';
import Title from '@/app/components/Utils/Title';
import AppOffer from '@/app/modules/home/AppOffer';
import ContactUs from '@/app/modules/home/ContactUs';
import HomeCarousel from '@/app/modules/home/HomeCarousel';
import HomeMenu from '@/app/modules/home/HomeMenu';
import RateUs from '@/app/modules/home/RateUs';

import appConfig from '@/configuration/appConfig';

const {header, rate, app, contact} = appConfig.components;

const Home = memo((): JSX.Element | null => {
    return (
        <>
            <Title value={header.title as string} />

            <MobileContainer>
                <div className="flex flex-col gap-layout text-black font-semibold">
                    <HomeCarousel />

                    <HomeMenu />

                    {rate && <RateUs />}

                    {app && <AppOffer />}

                    {contact && <ContactUs />}
                </div>
            </MobileContainer>
        </>
    );
});

export default Home;
