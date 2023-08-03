import React from 'react';
import classNames from 'classnames/bind';

import styles from './CheckboxInput.module.scss';
import { LocalIcons } from '../../../utils/constants/LocalIcons';

const cx = classNames.bind(styles);

interface Props {
    value: boolean;
    onChange: (value: boolean) => void;
    label: React.ReactNode;
    containerStyle?: string;
}

const CheckboxInput: React.FC<Props> = props => {
    return (
        <div className={props.containerStyle}>
            <div className={cx('container')} onClick={() => props.onChange(!props.value)}>
                <div className={cx('checkIcon', { checked: props.value })}>
                    <LocalIcons.CHECK />
                </div>

                <p>{props.label}</p>
            </div>
        </div>
    );
};

export { CheckboxInput };
