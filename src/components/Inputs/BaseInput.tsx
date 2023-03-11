import React from 'react';
import classNames from 'classnames/bind';

import styles from './BaseInput.module.scss';

import { useRTLDetector } from '../../utils/hooks/useRTLDetector';

const cx = classNames.bind(styles);

interface Props {
    name: string;
    label: string;
    icon?: React.ReactNode;
    error?: string;
    containerClassName?: string;
}

const BaseInput: React.FC<React.PropsWithChildren<Props>> = props => {
    const isRTL = useRTLDetector();

    return (
        <div className={`${cx('container', { error: !!props.error })} ${props.containerClassName}`}>
            <label htmlFor={props.name} className={styles.label}>
                {props.label}
            </label>

            <div className={cx('inputBox', { isRTL })}>
                <div className={styles.children}>{props.children}</div>

                {props.icon && <div className={styles.iconContainer}>{props.icon}</div>}
            </div>

            {props.error && <p className={styles.error}>{props.error}</p>}
        </div>
    );
};

export { BaseInput };
