import {memo} from 'react';

import CarouselView from '@/app/components/CarouselView';
import config from '@/configuration/config';

const HomeCarousel = memo((): JSX.Element | null => {
    return <CarouselView items={config.components.carousel.items} />;
});

export default HomeCarousel;
