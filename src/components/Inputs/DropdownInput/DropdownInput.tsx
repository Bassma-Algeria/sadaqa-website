import React, { ComponentProps, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './DropdownInput.module.scss';

import { LocalIcons } from '../../../utils/constants/LocalIcons';

import { useDeviceDetector } from '../../../utils/hooks/useDeviceDetector';
import { addOutsideClickListener } from '../../../utils/helpers/addOutsideClickListener';

import { BaseInput } from '../BaseInput';

const cx = classNames.bind(styles);

interface Props<T extends string | number> extends ComponentProps<typeof BaseInput> {
    value: string;
    options: { value: T; label: React.ReactNode }[];
    onChange: (value: T) => void;
    placeholder: string;
}

function DropdownInput<T extends string | number>(props: Props<T>) {
    const device = useDeviceDetector();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(device === 'mobile');
    }, []);

    return isMobile ? <MobileDropdownInput {...props} /> : <DesktopDropdownInput {...props} />;
}

function DesktopDropdownInput<T extends string | number>(props: Props<T>) {
    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        return addOutsideClickListener(ref.current, () => setIsOpen(false));
    }, [isOpen]);

    return (
        <div className={styles.desktop}>
            <BaseInput {...props}>
                <div className={styles.head} onClick={() => setIsOpen(true)}>
                    <p className={cx('value', { placeholder: !props.value })}>
                        {props.value || props.placeholder}
                    </p>

                    <LocalIcons.DOWN_ARROW />
                </div>
            </BaseInput>

            {isOpen && (
                <div className={styles.menu} ref={ref}>
                    {props.options.map(({ value, label }) => (
                        <div
                            className={styles.item}
                            key={value}
                            onClick={() => {
                                props.onChange(value);
                                setIsOpen(false);
                            }}
                        >
                            {label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function MobileDropdownInput<T extends string | number>(props: Props<T>) {
    return (
        <div className={styles.mobile}>
            <BaseInput {...props}>
                <select
                    id={props.name}
                    name={props.name}
                    className={cx({ placeholder: !props.value })}
                    value={props.value}
                    onChange={e => props.onChange(e.target.value as T)}
                >
                    <option hidden>{props.placeholder}</option>

                    {props.options.map(({ value, label }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
            </BaseInput>
        </div>
    );
}

export { DropdownInput };
