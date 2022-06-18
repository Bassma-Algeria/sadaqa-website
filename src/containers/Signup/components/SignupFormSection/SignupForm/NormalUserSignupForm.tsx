import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from '../../../Signup.module.scss';

import { useNormalUserSignupHandler } from './hooks/useNormalUserSignupHandler';

import { NameInput } from '../../../../../components/Forms/NameInput';
import { EmailInput } from '../../../../../components/Forms/EmailInput';
import { PhoneNumberInput } from '../../../../../components/Forms/PhoneNumberInput';
import { WilayaDropDownInput } from '../../../../../components/Forms/WilayaDropDownInput';
import { ConfirmPasswordInput } from '../../../../../components/Forms/ConfirmPasswordInput';
import { ValidatedPasswordInput } from '../../../../../components/Forms/ValidatedPasswordInput';
import { Button } from '../../../../../components/common/Button/Button';
import { Spinner } from '../../../../../components/common/Spinner/Spinner';

const NormalUserSignupForm: React.FC = () => {
  const { t } = useTranslation(['common', 'signup']);

  const { isLoading, handleSubmit, signupValues, setSignupValues, error } =
    useNormalUserSignupHandler();

  return (
    <form onSubmit={handleSubmit}>
      <NameInput
        name="firstName"
        label={t('first-name')}
        placeholder={t('ahmed')}
        className={styles.input}
        value={signupValues.firstName}
        onValueChange={firstName => setSignupValues({ ...signupValues, firstName })}
      />
      <NameInput
        name="lastName"
        label={t('last-name')}
        placeholder={t('slimani')}
        className={styles.input}
        value={signupValues.lastName}
        onValueChange={lastName => setSignupValues({ ...signupValues, lastName })}
      />
      <WilayaDropDownInput
        className={styles.input}
        value={signupValues.wilaya}
        onValueChange={wilaya => setSignupValues({ ...signupValues, wilaya })}
      />
      <PhoneNumberInput
        className={styles.input}
        value={signupValues.phoneNumber}
        onValueChange={phoneNumber => setSignupValues({ ...signupValues, phoneNumber })}
      />
      <EmailInput
        className={styles.notArabicInput}
        value={signupValues.email}
        onValueChange={email => setSignupValues({ ...signupValues, email })}
      />
      <ValidatedPasswordInput
        className={styles.notArabicInput}
        value={signupValues.password}
        onValueChange={password => setSignupValues({ ...signupValues, password })}
      />
      <ConfirmPasswordInput
        className={styles.notArabicInput}
        password={signupValues.password}
        value={signupValues.confirmPassword}
        onValueChange={confirmPassword => setSignupValues({ ...signupValues, confirmPassword })}
      />

      <p className={styles.error}>{error}</p>

      <Button variant="primary" className={styles.signupButton} type="submit" fullWidth>
        {isLoading ? <Spinner color="white" /> : t('submit')}
      </Button>
    </form>
  );
};

export { NormalUserSignupForm };
