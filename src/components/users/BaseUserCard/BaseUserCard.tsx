import React from 'react';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import styles from './BaseUserCard.module.scss';

import { ICONS } from '../../../utils/constants/Icons';

import { useRightToLeftDetector } from '../../../utils/hooks/useRightToLeftDetector';

import { UserAvatar } from '../UserAvatar';

const cx = classNames.bind(styles);

interface Props {
  userId: string;
  fullName: string;
  profilePicture: string | undefined;
  location: string;
  phoneNumber: string;
}

const BaseUserCard: React.FC<Props> = props => {
  const { t } = useTranslation('common');
  const { rightToLeft } = useRightToLeftDetector();

  return (
    <div className={cx('container', { rightToLeft })}>
      <div className={styles.topSection}>
        <UserAvatar profilePicture={props.profilePicture} size={80} />
        <h1>{props.fullName}</h1>
        <Link href={`/users/${props.userId}`}>
          <p>{t('see-profile')}</p>
        </Link>
      </div>

      <div className={styles.bottomSection}>
        <ContactInfoItem icon={ICONS.LOCATION} value={props.location} />
        <ContactInfoItem icon={ICONS.PHONE} value={props.phoneNumber} />

        {props.children}
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

export { BaseUserCard };
