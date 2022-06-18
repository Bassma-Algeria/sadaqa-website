import React from 'react';
import { useTranslation } from 'next-i18next';

import { DropDownInput } from '../common/Inputs/DropDownInput/DropDownInput';

interface Props {
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

const WilayaDropDownInput: React.FC<Props> = props => {
  const { t } = useTranslation('common');

  return (
    <DropDownInput
      {...props}
      name="wilaya"
      label={t('wilaya')}
      placeholder={t('tap-to-choose')}
      options={[]}
    />
  );
};

export { WilayaDropDownInput };
