import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

import styles from '../../Login.module.scss';

import { EmailInput } from '../../../../components/Forms/EmailInput';
import { ValidatedPasswordInput } from '../../../../components/Forms/PasswordInput';
import { Button } from '../../../../components/common/Button/Button';
import { Spinner } from '../../../../components/common/Spinner/Spinner';

const LoginForm: React.FC = () => {
  const { t } = useTranslation('common');

  const [loginInputValues, setLoginInputValues] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(loginUserGetAuthTokenAndPushToHome(loginInputValues));
    console.log(loginInputValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <EmailInput
        value={loginInputValues.email}
        onValueChange={email => setLoginInputValues({ ...loginInputValues, email })}
        className={styles.input}
      />

      <ValidatedPasswordInput
        label={t('password')}
        name="password"
        value={loginInputValues.password}
        onValueChange={password => setLoginInputValues({ ...loginInputValues, password })}
        className={styles.input}
      />

      <Button
        variant="primary"
        size="md"
        className={styles.loginButton}
        disabled={!loginInputValues.email || !loginInputValues.password}
        fullWidth
      >
        {isLoading ? <Spinner color="white" /> : t('login')}
      </Button>
    </form>
  );
};

export { LoginForm };
