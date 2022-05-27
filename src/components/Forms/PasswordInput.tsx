import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

import { PasswordInput } from '../common/Inputs/PasswordInput/PasswordInput';

interface Props {
  name: string;
  label: string;
  value: string;
  onValueChange: (password: string) => void;
  className?: string;
}

const ValidatedPasswordInput: React.FC<Props> = props => {
  const { t } = useTranslation('common');
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);

  const handleChange = (password: string) => {
    props.onValueChange(password);

    if (password) setIsValidPassword(password.length >= 6);
    else setIsValidPassword(true);
  };

  return (
    <PasswordInput
      {...props}
      onValueChange={handleChange}
      error={!isValidPassword ? t('password-should-have-6-letters') : undefined}
    />
  );
};

export { ValidatedPasswordInput };
