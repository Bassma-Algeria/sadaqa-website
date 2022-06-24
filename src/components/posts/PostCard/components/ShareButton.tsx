import React from 'react';
import { ReactSVG } from 'react-svg';

import styles from '../PostCard.module.scss';

import { ICONS } from '../../../../utils/constants/Icons';

import { useSharePostPopup } from '../../../../utils/hooks/Popups/useSharePostPopup';

interface Props {
  postId: string;
}

const ShareButton: React.FC<Props> = ({ postId }) => {
  const { SharePopup, openPopup } = useSharePostPopup(postId);

  return (
    <>
      <SharePopup />
      <div className={styles.Button} onClick={openPopup}>
        <ReactSVG src={ICONS.SHARE} />
      </div>
    </>
  );
};

export { ShareButton };
