import React from 'react';
import { useTranslation } from 'next-i18next';

import { PEOPLE_NEED_HELP_CATEGORIES } from '../../../../../../../utils/constants/PeopleNeedHelpCategories';

import { CategoriesList } from './CategoriesList';

const PeopleNeedHelpLinks: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <h3>{t('people-need-help')}</h3>

      <CategoriesList categories={PEOPLE_NEED_HELP_CATEGORIES} />
    </>
  );
};

export { PeopleNeedHelpLinks };
