import clsx from 'clsx';
import {memo, PropsWithChildren} from 'react';

import appTheme from '@/configuration/appTheme';

interface MiniWidgetProps {
    title: string;
    subtitle: string;
    className?: string;
    containerClassName?: string;
}

const MiniWidget = memo<PropsWithChildren<MiniWidgetProps>>(
    ({title, subtitle, children, className, containerClassName}): JSX.Element | null => {
        return (
            <section
                className={clsx(
                    'py-6 px-4 flex flex-col transition-all duration-200 gap-component-layout justify-center bg-component-background hover:bg-component-background-hover rounded-common',
                    {
                        'shadow-component': appTheme.shape.boxShadow,
                    },
                    containerClassName,
                )}
            >
                <div className="flex flex-col gap-y-0.5 justify-center text-center">
                    <h2 className="font-component-title text-component-title-color text-component-title">{title}</h2>
                    <p className="font-component-subtitle text-component-subtitle-color text-component-subtitle">
                        {subtitle}
                    </p>
                </div>

                <div className={clsx('flex justify-center', className)}>{children}</div>
            </section>
        );
    },
);

export default MiniWidget;
