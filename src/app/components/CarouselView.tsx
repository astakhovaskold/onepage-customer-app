import {Carousel, CarouselProps} from 'antd';
import {memo, ReactNode} from 'react';

interface CarouselItem {
    title: string;
    image?: string;
    href?: string;
    alt?: string;
    children?: ReactNode;
}

interface Props extends CarouselProps {
    items: Array<CarouselItem>;
}

const CarouselView = memo<Props>(({items, autoplay = true, autoplaySpeed = 3000}): JSX.Element | null => {
    return (
        <Carousel autoplay={autoplay} autoplaySpeed={autoplaySpeed} dots={items.length > 1} pauseOnDotsHover>
            {items.map(({title, image, alt, href, children}) => {
                const Element = href ? 'a' : 'div';

                return (
                    <Element
                        key={title}
                        href={href ?? undefined}
                        target={href ? '_blank' : undefined}
                        className="relative shadow-black rounded-common overflow-hidden min-h-[180px]"
                    >
                        {typeof children === 'undefined' ? (
                            <>{image ? <img src={image} title={title} alt={alt || title} /> : <span>{title}</span>}</>
                        ) : (
                            children
                        )}
                    </Element>
                );
            })}
        </Carousel>
    );
});

export default CarouselView;
