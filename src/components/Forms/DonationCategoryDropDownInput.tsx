import React from 'react';
import { useTranslation } from 'next-i18next';

import { DropDownInput } from '../common/Inputs/DropDownInput/DropDownInput';
import { DONATIONS_CATEGORIES } from '../../utils/constants/DonationsCategories';
import { DonationCategory } from '../../@types/Posts';

interface Props {
  value: DonationCategory | undefined;
  onValueChange: (category: DonationCategory) => void;
  className?: string;
}

const DonationCategoryDropDownInput: React.FC<Props> = props => {
  const { t } = useTranslation('common');

  return (
    <DropDownInput
      {...props}
      name="category"
      label={t('category')}
      placeholder={t('tap-to-choose')}
      options={DONATIONS_CATEGORIES.map(({ nameKey }) => ({ name: t(nameKey), value: nameKey }))}
    />
  );
};

export { DonationCategoryDropDownInput };
