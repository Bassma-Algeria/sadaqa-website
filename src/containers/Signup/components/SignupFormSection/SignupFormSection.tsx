import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from '../../Signup.module.scss';

import { HeadTitle } from './HeadTitle';
import { SignupForm } from './SignupForm';

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
  return (
    <section className={styles.signupFormSection}>
      <HeadTitle />
      <SignupForm />
    </section>
  );
};

export { SignupFormSection };
