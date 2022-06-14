import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import { ReactSVG } from 'react-svg';

import styles from '../../../../Navbar.module.scss';

import { ICONS } from '../../../../../../../utils/constants/Icons';
import { IMAGES } from '../../../../../../../utils/constants/Images';

import { useAuthContext } from '../../../../../../../utils/hooks/useAuthContext';

import { Avatar } from '../../../../../../common/Avatar/Avatar';
import { Button } from '../../../../../../common/Button/Button';

const LoginButtonsOrProfile: React.FC = () => {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? <Profile /> : <LoginButtons />;
};

const LoginButtons: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.loginButtons}>
      <Link href="/login">
        <Button variant="greyFilled" size="sm">
          {t('login')}
        </Button>
      </Link>

      <Link href="/signup">
        <Button variant="greyOutline" size="sm">
          {t('signup')}
        </Button>
      </Link>
    </div>
  );
};

const Profile: React.FC = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.picture}>
        <Avatar image={IMAGES.DEFAULT_PROFILE_PIC.src} size={50} />
      </div>

      <div className={styles.name}>
        <h3>Yasser</h3>
        <ReactSVG src={ICONS.RIGHT_ARROW_2} />
      </div>
    </div>
  );
};

export { LoginButtonsOrProfile };
