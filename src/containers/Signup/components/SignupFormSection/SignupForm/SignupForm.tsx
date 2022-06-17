import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

import styles from '../../../Signup.module.scss';

import { NormalUserSignupForm } from './NormalUserSignupForm';
import { AssociationSignupForm } from './AssociationSignupForm';
import { DropDownInput } from '../../../../../components/common/Inputs/DropDownInput/DropDownInput';

type UserType = 'association' | 'normalUser';

const SignupForm: React.FC = () => {
  const { t } = useTranslation(['signup', 'common']);
  const [userType, setUserType] = useState<UserType>();

  return (
    <div className={styles.signupForm}>
      <DropDownInput
        name="userType"
        className={styles.input}
        label={t('are-you-association')}
        placeholder={t('tap-to-choose', { ns: 'common' })}
        value={userType}
        onValueChange={type => setUserType(type as UserType)}
        options={[
          { name: t('yes-we-are-association'), value: 'association' },
          { name: t('no-iam-normal-user'), value: 'normalUser' },
        ]}
      />

      {userType === 'normalUser' && <NormalUserSignupForm />}
      {userType === 'association' && <AssociationSignupForm />}
    </div>
  );
};

export { SignupForm };
