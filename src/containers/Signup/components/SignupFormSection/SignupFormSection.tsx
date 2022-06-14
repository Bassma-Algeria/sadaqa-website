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
  return <section className={styles.signupFormSection}>Signup Form Section</section>;
};

export { SignupFormSection };
