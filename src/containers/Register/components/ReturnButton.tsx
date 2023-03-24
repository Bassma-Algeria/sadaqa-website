import React from 'react';

import { LocalIcons } from '../../../utils/constants/LocalIcons';

import styles from '../Register.module.scss';

interface Props {
    onClick: () => void;
}

const ReturnButton: React.FC<Props> = ({ onClick }) => {
    return (
        <div className={styles.returnButtonContainer} onClick={onClick}>
            <LocalIcons.LEFT_ARROW />
        </div>
    );
};

export { ReturnButton };
