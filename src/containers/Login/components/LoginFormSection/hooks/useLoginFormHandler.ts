import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { authGateway } from '../../../../../CoreGateways';
import { ServerError } from '../../../../../CoreGateways/utils/ServerError';
import { NetworkError } from '../../../../../CoreGateways/utils/NetworkError';

import { LocalStorage } from '../../../../../utils/helpers/LocalStorage';
import { useAuthContext } from '../../../../../utils/hooks/useAuthContext';
import { setToken } from '../../../../../context/authenticationActions';

const useLoginFormHandler = () => {
  const { back } = useRouter();
  const { dispatch } = useAuthContext();
  const { t } = useTranslation(['common', 'login']);

  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [loginBody, setLoginBody] = useState({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(undefined);

    try {
      const token = await authGateway.login(loginBody);

      LocalStorage.save('token', token);
      dispatch(setToken(token));

      back();
    } catch (err) {
      if (err instanceof NetworkError) setError(t('network-error'));
      else if (err instanceof ServerError) setError(t('credentials-error', { ns: 'login' }));
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, loginBody, setLoginBody, error, handleSubmit };
};

export { useLoginFormHandler };
