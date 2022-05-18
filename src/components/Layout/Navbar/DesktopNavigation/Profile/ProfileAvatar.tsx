import React from 'react';

import styles from '../../Navbar.module.scss';

import { IMAGES } from '../../../../../utils/constants/Images';
import { Avatar } from '../../../../common/Avatar/Avatar';

interface Props {
  onClick: () => void;
}

const ProfileAvatar: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.profileAvatar} onClick={onClick}>
      <Avatar image={IMAGES.DEFAULT_PROFILE_PIC.src} />
    </div>
  );
};

export { ProfileAvatar };
