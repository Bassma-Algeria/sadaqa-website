import React from 'react';

import { LocalIcons } from '../../../utils/constants/LocalIcons';

import styles from '../Register.module.scss';
import { useRTLDetector } from 'src/utils/hooks/useRTLDetector';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
    onClick: () => void;
}

const ReturnButton: React.FC<Props> = ({ onClick }) => {
    const isRTL = useRTLDetector();

    return (
        <div className={cx('returnButtonContainer', { isRTL })} onClick={onClick}>
            <LocalIcons.LEFT_ARROW />
        </div>
    );
};

export { ReturnButton };
