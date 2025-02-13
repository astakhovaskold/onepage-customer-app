import {memo} from 'react';

import MiniWidget from '@/app/components/MiniWidget';
import Button from '@/app/ui/Button';
import config from '@/configuration/config';

const Tips = memo((): JSX.Element | null => {
    const {title, subtitle, href, button} = config.components.tips;

    return (
        <MiniWidget title={title} subtitle={subtitle}>
            <Button className="h-10 !rounded-[16px]" href={href} target="_blank" rel="noreferrer nofollow">
                {button}
            </Button>
        </MiniWidget>
    );
});

export default Tips;
