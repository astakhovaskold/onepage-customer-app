import {memo} from 'react';

import CarouselView from '@/app/components/CarouselView';
import config from '@/configuration/config';

interface HomeCarouselProps {}

const HomeCarousel = memo<HomeCarouselProps>((): JSX.Element | null => {
    return (
        <>
            <CarouselView items={config.components.carousel.items} />
        </>
    );
});

export default HomeCarousel;
