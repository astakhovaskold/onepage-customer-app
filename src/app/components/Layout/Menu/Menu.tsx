import {memo, ReactNode} from 'react';

import Context from './Context';
import MenuItem from './MenuItem';
import MenuSection from './MenuSection';

interface MenuItemProps {
    title: string;
    href: string;
    icon?: ReactNode;
}

interface MenuProps {
    collapsed?: boolean;
    className?: string;
    items: Array<{
        key: string;
        children: Array<MenuItemProps>;
    }>;
}

const Menu = memo<MenuProps>(({items, collapsed = false, className}): JSX.Element | null => {
    return (
        <Context.Provider value={{collapsed}}>
            <nav className={className}>
                <ul>
                    {items.map(({key, children}) => (
                        <MenuSection key={key}>
                            {children.map(({title, href, icon}) => (
                                <MenuItem key={title} href={href} icon={icon}>
                                    {title}
                                </MenuItem>
                            ))}
                        </MenuSection>
                    ))}
                </ul>
            </nav>
        </Context.Provider>
    );
});

export default Menu;
