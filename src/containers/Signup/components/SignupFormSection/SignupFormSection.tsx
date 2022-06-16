import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from '../../Signup.module.scss';

import { HeadTitle } from './HeadTitle';
import { SignupForm } from './SignupForm/SignupForm';

const SignupFormSection: React.FC = () => {
  return (
    <section className={styles.signupFormSection}>
      <HeadTitle />
      <SignupForm />
    </section>
  );
};

export { SignupFormSection };
