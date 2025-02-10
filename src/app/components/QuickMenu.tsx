import {Button} from 'antd';
import clsx from 'clsx';
import {memo} from 'react';

interface QuickMenuItem {
    title: string;
    href?: string;
    onClick?: () => void;
    featured?: boolean;
}

interface QuickMenuProps {
    items: Array<QuickMenuItem>;
}

const QuickMenu = memo<QuickMenuProps>(({items}): JSX.Element | null => {
    return (
        <ul className="flex items-center gap-x-2">
            {items.map(({title, href, onClick, featured = false}) => (
                <li key={title} className="flex-auto">
                    <Button
                        className={clsx(
                            'border-none bg-primary hover:!bg-secondary rounded-lg',
                            featured ? 'h-16 min-w-28' : 'h-12',
                        )}
                        onClick={onClick}
                        href={href}
                        block
                    >
                        {title}
                    </Button>
                </li>
            ))}
        </ul>
    );
});

export default QuickMenu;
