import Image from 'next/image';
import React from 'react';
import { ReactSVG } from 'react-svg';

import { ICONS } from '../../../../utils/constants/Icons';

import styles from '../ItemsList.module.scss';

interface Props {
  title: string;
}

const TitleBar: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles.titleBarContainer}>
      <h1 className={styles.title}>{title}</h1>
      <Image src={ICONS.RIGHT_ARROW} />
    </div>
  );
};

export { TitleBar };
