import {memo} from 'react';

import ContactButton from '@/app/components/ContactButton';
import config from '@/configuration/config';

const ReviewVendor = memo((): JSX.Element | null => {
    const {items} = config.modal.rate;

    return (
        <ul className="grid grid-cols-12">
            {items.map(({name, href, ...rest}) => {
                const hasIcon = 'icon' in rest;
                const hasImage = 'image' in rest;

                if (!hasIcon && !hasImage) return null;

                return (
                    <li key={name} className="col-span-3 flex justify-center">
                        {hasIcon ? (
                            <ContactButton type={rest.icon} href={href} />
                        ) : (
                            <a href={href} target="_blank" rel="noreferrer nofollow">
                                <img
                                    src={rest.image}
                                    alt=""
                                    className="object-cover w-10 aspect-square rounded-full overflow-hidden"
                                />
                            </a>
                        )}
                    </li>
                );
            })}
        </ul>
    );
});

export default ReviewVendor;
