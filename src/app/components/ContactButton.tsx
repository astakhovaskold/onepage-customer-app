import clsx from 'clsx';
import {memo} from 'react';

import SocialMediaIcon from '@/app/components/SocialMediaIcon';
import {SocialMediaType} from '@/app/components/SocialMediaIcon/types';

interface ContactIconProps {
    type: SocialMediaType;
    href: string;
}

const ContactButton = memo<ContactIconProps>(({type, href}) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx(
                'p-2 w-10 aspect-square flex items-center justify-center rounded-full hover:!text-[inherit]',
            )}
        >
            <SocialMediaIcon type={type} />
        </a>
    );
});

export default ContactButton;
