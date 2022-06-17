import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { authGateway } from '../../../../../../CoreGateways';
import { NetworkError } from '../../../../../../CoreGateways/utils/NetworkError';
import { ServerError } from '../../../../../../CoreGateways/utils/ServerError';

import { setToken } from '../../../../../../context/authenticationActions';

import { LocalStorage } from '../../../../../../utils/helpers/LocalStorage';
import { useAuthContext } from '../../../../../../utils/hooks/useAuthContext';

interface NormalUserSignupValues {
  associationName: string;
  wilaya: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  associationDocuments: File[];
}

const initialValues: NormalUserSignupValues = {
  associationName: '',
  wilaya: '',
  phoneNumber: '',
  email: '',
  password: '',
  confirmPassword: '',
  associationDocuments: [],
};

const useAssociationSignupHandler = () => {
  const { push } = useRouter();
  const { dispatch } = useAuthContext();
  const { t } = useTranslation(['common', 'signup']);

  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [signupValues, setSignupValues] = useState<NormalUserSignupValues>(initialValues);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(undefined);

    try {
      console.log(signupValues);

      // const token = await authGateway.associationSignup(signupValues);

      // LocalStorage.save('token', token);
      // dispatch(setToken(token));

      // push('/');
    } catch (e) {
      if (e instanceof NetworkError) setError(t('network-error'));
      else if (e instanceof ServerError) setError(t('signup-error', { ns: 'signup' }));
    } finally {
      setIsLoading(false);
    }
  };

  return { error, isLoading, signupValues, setSignupValues, handleSubmit };
};

export { useAssociationSignupHandler };
