import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

import { TextInput } from '../common/Inputs/TextInput/TextInput';

interface Props {
  value: string;
  onValueChange: (email: string) => void;
  className?: string;
}

const EmailInput: React.FC<Props> = ({ value, onValueChange, className }) => {
  const { t } = useTranslation('common');
  const isInvalidEmail = value && !value.match(EMAIL_PATTERN);

  return (
    <TextInput
      name="email"
      label={t('email')}
      placeholder="example@gmail.com"
      className={className}
      value={value}
      onValueChange={onValueChange}
      error={isInvalidEmail ? t('invalid-email') : undefined}
    />
  );
};

const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export { EmailInput };
