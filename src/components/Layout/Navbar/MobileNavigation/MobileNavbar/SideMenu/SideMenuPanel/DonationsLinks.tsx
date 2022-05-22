import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from '../../../../Navbar.module.scss';

import { DONATIONS_CATEGORIES } from '../../../../../../../utils/constants/DonationsCategories';

import { CategoriesList } from './CategoriesList';

const DonationsLinks: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <h3>{t('donations')}</h3>

      <CategoriesList categories={DONATIONS_CATEGORIES} />
    </>
  );
};

export { DonationsLinks };
