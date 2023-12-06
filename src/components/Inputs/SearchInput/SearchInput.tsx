import React, { ComponentProps, HTMLInputTypeAttribute } from 'react';
import { BaseInput } from '../BaseInput';
import styles from './SearchInput.module.scss';
import { LocalIcons } from '../../../utils/constants/LocalIcons';

interface Props extends ComponentProps<typeof BaseInput> {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

const SearchInput: React.FC<Props> = props => {
    return (
        <BaseInput {...props} icon={<SearchIcon />}>
            <input
                type="text"
                id={props.name}
                name={props.name}
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
                placeholder={props.placeholder}
                className={styles.input}
            />
        </BaseInput>
    );
};

const SearchIcon: React.FC = () => {
    return (
        <div className={styles.iconContainer}>
            <LocalIcons.SEARCH_PRIMARY />
        </div>
    );
};

export { SearchInput };
