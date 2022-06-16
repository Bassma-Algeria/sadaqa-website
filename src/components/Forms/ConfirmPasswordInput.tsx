import React from 'react';
import { useTranslation } from 'next-i18next';

import { PasswordInput } from '../common/Inputs/PasswordInput/PasswordInput';

interface Props {
  value: string;
  onValueChange: (password: string) => void;
  className?: string;
  password: string;
}

const ConfirmPasswordInput: React.FC<Props> = props => {
  const { t } = useTranslation('common');
  const isInvalidConfirmPassword = props.value && props.value !== props.password;

  return (
    <PasswordInput
      {...props}
      name="confirmPassword"
      label={t('confirm-password')}
      error={isInvalidConfirmPassword ? t('should-match-password') : undefined}
    />
  );
};

export { ConfirmPasswordInput };
