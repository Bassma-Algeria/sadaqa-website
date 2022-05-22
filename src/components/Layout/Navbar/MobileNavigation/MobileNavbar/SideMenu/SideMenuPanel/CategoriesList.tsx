import React from 'react';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import { useTranslation } from 'next-i18next';

import styles from '../../../../Navbar.module.scss';

import { LinkCategory } from '../../../../../../../@types/Links';

interface Props {
  categories: LinkCategory[];
}

const CategoriesList: React.FC<Props> = ({ categories }) => {
  const { t } = useTranslation('common');

  return (
    <>
      {categories.map(({ icon, nameKey, pageLink }, index) => (
        <Link href={pageLink} key={index}>
          <div className={styles.categoryLink}>
            <div className={styles.iconContainer}>
              <ReactSVG src={icon} />
            </div>

            <p>{t(nameKey)}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export { CategoriesList };
