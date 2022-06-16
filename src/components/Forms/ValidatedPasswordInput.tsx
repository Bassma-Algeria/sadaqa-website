import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

import { PasswordInput } from '../common/Inputs/PasswordInput/PasswordInput';

interface Props {
  value: string;
  onValueChange: (password: string) => void;
  className?: string;
}

const ValidatedPasswordInput: React.FC<Props> = props => {
  const { t } = useTranslation('common');
  const isInvalidPassword = props.value && props.value.length < 6;

  return (
    <PasswordInput
      {...props}
      name="password"
      label={t('password')}
      error={isInvalidPassword ? t('password-should-have-6-letters') : undefined}
    />
  );
};

export { ValidatedPasswordInput };
