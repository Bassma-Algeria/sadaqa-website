import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import styles from '../../Navbar.module.scss';

import { PEOPLE_NEED_HELP_CATEGORIES } from '../../../../../utils/constants/PeopleNeedHelpCategories';

import { CategoriesLinksPopup } from './CategoriesLinksPopup';

const PeopleNeedHelpLinks: React.FC = () => {
  const ref = useRef(null);
  const { t } = useTranslation('common');

  const [isCategoriesPopupOpen, setIsCategoriesPopupOpen] = useState<boolean>(false);

  return (
    <div ref={ref} className={styles.navigationLinksContainer}>
      <div className={styles.navigationLink} onMouseEnter={() => setIsCategoriesPopupOpen(true)}>
        <Link href="/people_need_help">
          <p>{t('people-need-help')}</p>
        </Link>
      </div>

      {isCategoriesPopupOpen && (
        <CategoriesLinksPopup
          containerRef={ref}
          closePopup={() => setIsCategoriesPopupOpen(false)}
          categories={PEOPLE_NEED_HELP_CATEGORIES}
          category="people-need-help"
          oneColumn
        />
      )}
    </div>
  );
};

export { PeopleNeedHelpLinks };
