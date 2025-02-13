import {Button as ButtonAntd, ButtonProps} from 'antd';
import clsx from 'clsx';
import {memo} from 'react';

interface Props extends ButtonProps {}

const Button = memo<Props>(({children, className, ...props}): JSX.Element | null => {
    return (
        <ButtonAntd {...props} className={clsx('border-none', className)}>
            {children}
        </ButtonAntd>
    );
});

export default Button;
