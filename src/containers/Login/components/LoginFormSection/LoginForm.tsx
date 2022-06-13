import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

import styles from '../../Login.module.scss';

import { EmailInput } from '../../../../components/Forms/EmailInput';
import { ValidatedPasswordInput } from '../../../../components/Forms/PasswordInput';
import { Button } from '../../../../components/common/Button/Button';
import { Spinner } from '../../../../components/common/Spinner/Spinner';
import { useLoginFormHandler } from './hooks/useLoginFormHandler';

const LoginForm: React.FC = () => {
  const { t } = useTranslation('common');
  const { loginBody, setLoginBody, handleSubmit, isLoading, error } = useLoginFormHandler();

  return (
    <form onSubmit={handleSubmit}>
      <EmailInput
        value={loginBody.email}
        onValueChange={email => setLoginBody({ ...loginBody, email })}
        className={styles.input}
      />

      <ValidatedPasswordInput
        label={t('password')}
        name="password"
        value={loginBody.password}
        onValueChange={password => setLoginBody({ ...loginBody, password })}
        className={styles.input}
      />

      <p className={styles.error}>{error}</p>

      <Button
        variant="primary"
        size="md"
        className={styles.loginButton}
        disabled={!loginBody.email || !loginBody.password}
        fullWidth
      >
        {isLoading ? <Spinner color="white" /> : t('login')}
      </Button>
    </form>
  );
};

export { LoginForm };
