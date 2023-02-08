import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface Props {
    children: React.ReactNode;
    onClick: () => void;
    Icon?: React.ReactNode;
    variant: 'primary' | 'secondary';
    containerClassname?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = props => {
    return (
        <div className={props.containerClassname}>
            <button type={props.type} onClick={props.onClick} className={cx('btn', props.variant)}>
                {props.children}
            </button>
        </div>
    );
};

export { Button };
