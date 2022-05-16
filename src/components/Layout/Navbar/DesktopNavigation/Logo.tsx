import Image from 'next/image';
import React from 'react';

import styles from '../Navbar.module.scss';

import { IMAGES } from '../../../../utils/constants/Images';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <div className={styles.logoContainer}>
      <Link href={'/'}>
        <Image src={IMAGES.LOGO} alt="Logo" priority />
      </Link>
    </div>
  );
};

export { Logo };
