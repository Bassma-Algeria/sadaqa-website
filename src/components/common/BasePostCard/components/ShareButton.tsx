import React from 'react';
import { ReactSVG } from 'react-svg';

import styles from '../BasePostCard.module.scss';

import { ICONS } from '../../../../utils/constants/Icons';

interface Props {
  sharePost: () => void;
}

const ShareButton: React.FC<Props> = ({ sharePost }) => {
  return (
    <div className={styles.Button} onClick={sharePost}>
      <ReactSVG src={ICONS.SHARE} />
    </div>
  );
};

export { ShareButton };
