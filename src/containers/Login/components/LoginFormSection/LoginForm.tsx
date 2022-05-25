import React, { useState } from 'react';

import styles from '../../Login.module.scss';

import { Button } from '../../../../components/common/Button/Button';
import { Spinner } from '../../../../components/common/Spinner/Spinner';
import { useTranslation } from 'next-i18next';
import { TextInput } from '../../../../components/common/Inputs/TextInput/TextInput';

const LoginForm: React.FC = () => {
  const { t } = useTranslation('common');

  const [loginInputValues, setLoginInputValues] = useState({ email: '', password: '' });
  const loading = false;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(loginUserGetAuthTokenAndPushToHome(loginInputValues));
    console.log(loginInputValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label={t('email')}
        name="email"
        placeholder="example@email.com"
        value={loginInputValues.email}
        onValueChange={email => setLoginInputValues({ ...loginInputValues, email })}
        className={styles.input}
      />
      <TextInput
        label={t('password')}
        name="password"
        placeholder="***********"
        value={loginInputValues.password}
        onValueChange={password => setLoginInputValues({ ...loginInputValues, password })}
        className={styles.input}
      />

      <Button variant="primary" size="md" className={styles.loginButton} fullWidth>
        {loading ? <Spinner color="white" /> : t('login')}
      </Button>
    </form>
  );
};

export { LoginForm };
