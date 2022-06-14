import React from 'react';
import Image from 'next/image';

import styles from '../Signup.module.scss';
import { IMAGES } from '../../../utils/constants/Images';

const SignupImageSection: React.FC = () => {
  return (
    <section className={styles.signupImageSection}>
      <div className={styles.imgContainer}>
        <Image
          placeholder="blur"
          src={IMAGES.SIGNUP}
          alt="girl with his father put donations in a box"
        />
      </div>
    </section>
  );
};

export { SignupImageSection };
