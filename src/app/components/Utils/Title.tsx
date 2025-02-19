import {memo, useEffect} from 'react';

interface TitleProps {
    value?: string;
}

const Title = memo<TitleProps>(({value}): null => {
    useEffect(() => {
        document.title = value ? `${value} | ${__SYSTEM__}` : __SYSTEM__;
    }, [value]);

    return null;
});

export default Title;
