import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../../Navbar.module.scss';

import { IMAGES } from '../../../../../utils/constants/Images';

const Logo: React.FC = () => {
  return (
    <div className={styles.logoContainer}>
      <Link href={'/'} passHref>
        <Image src={IMAGES.LOGO} alt="Logo" priority />
      </Link>
    </div>
  );
};

export { Logo };
