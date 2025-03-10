import {memo} from 'react';

import MiniWidget from '@/app/components/MiniWidget';
import Button from '@/app/ui/Button';
import appConfig from '@/configuration/appConfig';
import appTheme from '@/configuration/appTheme';

const AppOffer = memo((): JSX.Element | null => {
    const {title, subtitle, href, button} = appConfig.components.app;

    return (
        <MiniWidget title={title} subtitle={subtitle}>
            <Button
                className="h-10 max-w-[164px] w-full !bg-app-button-background !text-app-button-color !rounded-common !text-sm"
                href={href}
                size={appTheme.token.components.app.button.size || 'middle'}
                target="_blank"
                rel="noreferrer nofollow"
            >
                {button}
            </Button>
        </MiniWidget>
    );
});

export default AppOffer;
