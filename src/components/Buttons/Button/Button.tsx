import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';
import { useRTLDetector } from '../../../utils/hooks/useRTLDetector';

const cx = classNames.bind(styles);

interface Props {
    children: React.ReactNode;
    onClick: () => void;
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    variant: 'primary' | 'secondary';
    containerClassname?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = props => {
    const Icon = props.Icon;

    const isRTL = useRTLDetector();

    return (
        <div className={props.containerClassname}>
            <button type={props.type} onClick={props.onClick} className={cx('btn', props.variant)}>
                <div>{props.children}</div>

                {Icon && <Icon className={cx('icon', { isRTL })} />}
            </button>
        </div>
    );
};

export { Button };
