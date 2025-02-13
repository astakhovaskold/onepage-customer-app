import {memo} from 'react';

import CarouselView from '@/app/components/CarouselView';
import appConfig from '@/configuration/appConfig';

const HomeCarousel = memo((): JSX.Element | null => {
    return <CarouselView items={appConfig.components.carousel.items} />;
});

export default HomeCarousel;
