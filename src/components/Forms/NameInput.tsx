import { useTranslation } from 'next-i18next';
import React from 'react';
import { TextInput } from '../common/Inputs/TextInput/TextInput';

interface Props extends Omit<React.ComponentProps<typeof TextInput>, 'error'> {}

const NameInput: React.FC<Props> = props => {
  const { t } = useTranslation();
  const isInvalidName = props.value && props.value.length < 3;

  return (
    <TextInput
      {...props}
      error={isInvalidName ? t('should-have-at-least-3-characters') : undefined}
    />
  );
};

export { NameInput };
