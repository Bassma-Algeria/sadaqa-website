import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { authGateway } from '../../../../../../CoreGateways';
import { ServerError } from '../../../../../../CoreGateways/utils/ServerError';
import { NetworkError } from '../../../../../../CoreGateways/utils/NetworkError';
import { NormalUserSignupBody } from '../../../../../../CoreGateways/AuthGateway/AuthGateway';

import { setToken } from '../../../../../../context/authenticationActions';

import { LocalStorage } from '../../../../../../utils/helpers/LocalStorage';
import { useAuthContext } from '../../../../../../utils/hooks/useAuthContext';

const initialValues: NormalUserSignupBody = {
  firstName: '',
  lastName: '',
  wilaya: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
};

const useNormalUserSignupHandler = () => {
  const { push } = useRouter();
  const { dispatch } = useAuthContext();
  const { t } = useTranslation(['common', 'signup']);

  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [signupValues, setSignupValues] = useState<NormalUserSignupBody>(initialValues);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(undefined);

    try {
      const token = await authGateway.normalUserSignup(signupValues);

      LocalStorage.save('token', token);
      dispatch(setToken(token));

      push('/');
    } catch (e) {
      if (e instanceof NetworkError) setError(t('network-error'));
      else if (e instanceof ServerError) setError(t('signup-error', { ns: 'signup' }));
    } finally {
      setIsLoading(false);
    }
  };

  return { error, isLoading, signupValues, setSignupValues, handleSubmit };
};

export { useNormalUserSignupHandler };
