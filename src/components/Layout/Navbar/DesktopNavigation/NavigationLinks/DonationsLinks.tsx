import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import styles from '../../Navbar.module.scss';

import { DONATIONS_CATEGORIES } from '../../../../../utils/constants/DonationsCategories';

import { CategoriesLinksPopup } from './CategoriesLinksPopup';

const DonationsLinks: React.FC = () => {
  const { t } = useTranslation('common');

  const [isCategoriesPopupOpen, setIsCategoriesPopupOpen] = useState<boolean>(false);

  return (
    <div
      className={styles.navigationLinksContainer}
      onMouseLeave={() => setIsCategoriesPopupOpen(false)}
    >
      <div className={styles.navigationLink} onMouseEnter={() => setIsCategoriesPopupOpen(true)}>
        <Link href="/donations">
          <p>{t('donations')}</p>
        </Link>
      </div>

      {isCategoriesPopupOpen && (
        <CategoriesLinksPopup categories={DONATIONS_CATEGORIES} category="donations" />
      )}
    </div>
  );
};

export { DonationsLinks };
