import React from 'react';
import Link from 'next/link';

// styles
import styles from '../../../../../../styles/navbar.module.scss';

// images and icons
import logo from '../../../../../../../public/images/sadaqa-logo.png';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/">
      <div className={styles.logoContainer}>
        <Image placeholder="blur" src={logo} alt="logo" />
      </div>
    </Link>
  );
};

export default Logo;
