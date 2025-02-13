import {memo} from 'react';

import MiniWidget from '@/app/components/MiniWidget';
import Button from '@/app/ui/Button';
import appConfig from '@/configuration/appConfig';
import appTheme from '@/configuration/appTheme';

const Tips = memo((): JSX.Element | null => {
    const {title, subtitle, href, button} = appConfig.components.tips;

    return (
        <MiniWidget title={title} subtitle={subtitle}>
            <Button
                className="h-10 !bg-tips-button-background !text-tips-button-color !rounded-common !text-sm"
                href={href}
                size={appTheme.token.components.tips.button.size || 'middle'}
                target="_blank"
                rel="noreferrer nofollow"
            >
                {button}
            </Button>
        </MiniWidget>
    );
});

export default Tips;
