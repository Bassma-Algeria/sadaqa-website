import React from 'react';
import { ReactSVG } from 'react-svg';
import { useTranslation } from 'next-i18next';

import styles from './NoPosts.module.scss';

import { ICONS } from '../../../utils/constants/Icons';

interface Props {
  /** @default 'no posts found' */
  message?: string;

  containerClass?: string;
}

const NoPosts: React.FC<Props> = ({ containerClass, message }) => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.container} ${containerClass}`}>
      <ReactSVG src={ICONS.NO_POSTS} />
      <p>{message || t('no-posts-found')}</p>
    </div>
  );
};

export { NoPosts };
