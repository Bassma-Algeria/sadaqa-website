import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';

import styles from '../../Signup.module.scss';

{
  /* 
    <form onSubmit={handleSubmit}>
      {!signupInputValues.roleId ? (
        <ChooseTypeSlide
          inputValues={signupInputValues}
          setInputValues={setSignupInputValues}
        />
      ) : signupInputValues.roleId === 1 ? (
        <CreateNormalUser
          inputValues={signupInputValues}
          setInputValues={setSignupInputValues}
          handleSubmit={handleSubmit}
        />
      ) : (
        signupInputValues.roleId === 2 && (
          <CreateAssociation
            inputValues={signupInputValues}
            setInputValues={setSignupInputValues}
            handleSubmit={handleSubmit}
          />
        )
      )}

      <Buttons
        handleSubmit={handleSubmit}
        roleId={signupInputValues.roleId}
        initializeState={initializeState}
      />
    </form> 
  */
}

const SignupFormSection: React.FC = () => {
  const { t } = useTranslation(['common', 'signup']);

  return (
    <section className={styles.signupFormSection}>
      <div className={styles.headTitle}>
        <h1>{t('signup')}</h1>
        <p>
          {t('already-have-account', { ns: 'signup' })} <Link href="/login">{t('login')}</Link>
        </p>
      </div>
    </section>
  );
};

export { SignupFormSection };
