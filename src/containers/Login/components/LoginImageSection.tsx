import React from 'react';
import Image from 'next/image';

import styles from '../Login.module.scss';

import { IMAGES } from '../../../utils/constants/Images';

const LoginImageSection: React.FC = () => {
  return (
    <div className={styles.loginImageContainer}>
      <Image src={IMAGES.LOGIN} alt="woman put donations in a box" placeholder="blur" priority />
    </div>
  );
};

export { LoginImageSection };
