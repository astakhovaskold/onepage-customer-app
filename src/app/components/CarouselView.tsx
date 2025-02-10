import {Carousel, CarouselProps} from 'antd';
import {memo} from 'react';

interface CarouselItem {
    title: string;
    image?: string;
    href?: string;
    alt?: string;
}

interface Props extends CarouselProps {
    items: Array<CarouselItem>;
}

const CarouselView = memo<Props>(({items, autoplay = true, autoplaySpeed = 3000}): JSX.Element | null => {
    return (
        <Carousel autoplay={autoplay} autoplaySpeed={autoplaySpeed}>
            {items.map(({title, image, alt, href}) => {
                const Element = href ? 'a' : 'div';

                return (
                    <Element
                        key={title}
                        href={href ?? undefined}
                        target={href ? '_blank' : undefined}
                        className="shadow-black rounded-lg overflow-hidden"
                    >
                        {image ? <img src={image} title={title} alt={alt || title} /> : <span>{title}</span>}
                    </Element>
                );
            })}
        </Carousel>
    );
});

export default CarouselView;
