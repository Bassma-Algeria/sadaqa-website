import React, { ComponentProps, HTMLInputTypeAttribute } from 'react';

import styles from './TextInput.module.scss';

import { BaseInput } from '../BaseInput';

interface Props extends ComponentProps<typeof BaseInput> {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    type?: HTMLInputTypeAttribute;
}
const TextInput: React.FC<Props> = props => {
    return (
        <BaseInput {...props}>
            <input
                type={props.type}
                id={props.name}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
                className={styles.input}
            />
        </BaseInput>
    );
};

export { TextInput };
