import React, { ComponentProps, useState } from 'react';

import styles from './PasswordInput.module.scss';

import { LocalIcons } from '../../../utils/constants/LocalIcons';

import { BaseInput } from '../BaseInput';

interface Props extends ComponentProps<typeof BaseInput> {
    value: string;
    onChange: (value: string) => void;
}

const PasswordInput: React.FC<Props> = props => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <BaseInput
            {...props}
            icon={
                <ShowHidePasswordIcon
                    showPassword={showPassword}
                    onClick={() => setShowPassword(!showPassword)}
                />
            }
        >
            <input
                type={showPassword ? 'text' : 'password'}
                id={props.name}
                name={props.name}
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
                className={styles.input}
            />
        </BaseInput>
    );
};

interface ShowHidePasswordIconProps {
    showPassword: boolean;
    onClick: () => void;
}
const ShowHidePasswordIcon: React.FC<ShowHidePasswordIconProps> = ({ showPassword, onClick }) => {
    return (
        <div className={styles.iconContainer} onClick={onClick}>
            {!showPassword ? <LocalIcons.EYE /> : <LocalIcons.DASHED_EYE />}
        </div>
    );
};

export { PasswordInput };
