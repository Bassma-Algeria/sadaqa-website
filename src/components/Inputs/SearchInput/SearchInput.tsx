import React from 'react';
import styles from './SearchInput.module.scss';
import { LocalIcons } from '../../../utils/constants/LocalIcons';
import { useRTLDetector } from '../../../utils/hooks/useRTLDetector';

interface Props {
    placeholder: string;
    onChange: (value: string) => void;
}

const Search: React.FC<Props> = props => {
    const isRTL = useRTLDetector();

    return (
        <div className={styles.searchInputContainer}>
            <input
                className={styles.searchInput}
                type="text"
                onChange={e => props.onChange(e.target.value)}
                placeholder={props.placeholder}
            />
            <div className={styles.searchIconContainer}>
                <LocalIcons.SEARCH_PRIMARY />
            </div>
        </div>
    );
};

export { Search };