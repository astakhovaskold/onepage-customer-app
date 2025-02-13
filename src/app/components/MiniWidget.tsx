import clsx from 'clsx';
import {memo, PropsWithChildren} from 'react';

interface MiniWidgetProps {
    title: string;
    subtitle: string;
    className?: string;
}

const MiniWidget = memo<PropsWithChildren<MiniWidgetProps>>(
    ({title, subtitle, children, className}): JSX.Element | null => {
        return (
            <section className="py-4 x-4 flex flex-col gap-y-4 justify-center bg-secondary rounded-lg">
                <div className="flex flex-col gap-y-0.5 justify-center text-center">
                    <h2 className="font-bold text-black text-xl">{title}</h2>
                    <p className="font-normal text-black/80 text-xs">{subtitle}</p>
                </div>

                <div className={clsx('flex justify-center', className)}>{children}</div>
            </section>
        );
    },
);

export default MiniWidget;
