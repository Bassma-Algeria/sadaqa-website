import React, { useState } from 'react';

import styles from '../../Signup.module.scss';

import { DropDownInput } from '../../../../components/common/Inputs/DropDownInput/DropDownInput';
import { EmailInput } from '../../../../components/Forms/EmailInput';

const SignupForm: React.FC = () => {
  const [userType, setUserType] = useState<string>();

  return (
    <div className={styles.singupForm}>
      <DropDownInput
        label="string"
        name="userType"
        placeholder="string"
        value={userType}
        onValueChange={type => setUserType(type)}
        options={[
          { label: 'Association', value: 'association' },
          { label: 'normal', value: 'normalUser' },
          { label: 'normal', value: 'normalUser' },
          { label: 'normal', value: 'normalUser' },
          { label: 'normal', value: 'normalUser' },
          { label: 'normal', value: 'normalUser' },
          { label: 'normal', value: 'normalUser' },
          { label: 'normal', value: 'normalUser' },
          { label: 'normal', value: 'normalUser' },
          { label: 'normal', value: 'normalUser' },
          { label: 'normal', value: 'normalUser' },
          { label: 'normal', value: 'normalUser' },
          { label: 'normal', value: 'normalUser' },
        ]}
      />
    </div>
  );
};

export { SignupForm };
