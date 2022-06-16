import React from 'react';
import { useTranslation } from 'next-i18next';

import { TextInput } from '../common/Inputs/TextInput/TextInput';

interface Props {
  className: string;
  value: string;
  onValueChange: (value: string) => void;
}

const PhoneNumberInput: React.FC<Props> = ({ className, onValueChange, value }) => {
  const { t } = useTranslation('common');
  const isInvalidPhoneNumber = value && !value.match(PHONE_NUMBER_PATTERN);

  return (
    <TextInput
      label={t('phone-number')}
      name="phoneNumber"
      placeholder="0798980975"
      className={className}
      value={value}
      onValueChange={onValueChange}
      error={isInvalidPhoneNumber ? t('invalid-phone-number') : undefined}
    />
  );
};

const PHONE_NUMBER_PATTERN = /^(00213|\+213|0)(5|6|7)[0-9]{8}$/;

export { PhoneNumberInput };
