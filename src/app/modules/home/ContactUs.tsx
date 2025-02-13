import {memo} from 'react';

import ContactButton from '@/app/components/ContactButton';
import MiniWidget from '@/app/components/MiniWidget';
import {SocialMediaType} from '@/app/components/SocialMediaIcon/types';
import appConfig from '@/configuration/appConfig';

const ContactUs = memo((): JSX.Element | null => {
    const {title, subtitle, items = []} = appConfig.components.contact;

    return (
        <MiniWidget title={title} subtitle={subtitle} className="gap-x-6">
            {items.map(({type, href}) => (
                <ContactButton key={href} href={href} type={type as SocialMediaType} />
            ))}
        </MiniWidget>
    );
});

export default ContactUs;
