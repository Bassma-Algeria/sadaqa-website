import React from 'react';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import styles from './UserCard.module.scss';

import { ICONS } from '../../../utils/constants/Icons';
import { IMAGES } from '../../../utils/constants/Images';

import { useRightToLeftDetector } from '../../../utils/hooks/useRightToLeftDetector';

import { Avatar } from '../../common/Avatar/Avatar';
import { Button } from '../../common/Button/Button';

const cx = classNames.bind(styles);

interface Props {}

const UserCard: React.FC<Props> = () => {
  const { t } = useTranslation('common');
  const { rightToLeft } = useRightToLeftDetector();

  return (
    <div className={cx('container', { rightToLeft })}>
      <div className={styles.topSection}>
        <Avatar image={IMAGES.DEFAULT_PROFILE_PIC.src} size={80} />
        <h1>Yasser Belatreche</h1>
        <p>{t('see-profile')}</p>
      </div>

      <div className={styles.bottomSection}>
        <ContactInfoItem icon={ICONS.LOCATION} value={'jijel'} />
        <ContactInfoItem icon={ICONS.PHONE} value={'0798 98 09 75'} />

        <Button variant="primary" size="sm" className={styles.button}>
          {t('send-message')}
        </Button>
      </div>
    </div>
  );
};

const ContactInfoItem: React.FC<{ icon: string; value: string }> = ({ icon, value }) => {
  return (
    <div className={styles.contactInfoItem}>
      <ReactSVG src={icon} />
      <p>{value}</p>
    </div>
  );
};

export { UserCard };
