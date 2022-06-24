import React from 'react';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import styles from '../../Navbar.module.scss';

import type { LinkCategory } from '../../../../../@types/Links';

const cx = classNames.bind(styles);

interface Props {
  category: 'donations' | 'people-need-help';
  categories: LinkCategory[];
  oneColumn?: boolean;
}

const CategoriesLinksPopup: React.FC<Props> = ({ oneColumn, ...props }) => {
  const { locale } = useRouter();
  const { t } = useTranslation('common');

  return (
    <div className={styles.categoriesPopupContainer}>
      <div className={cx('categoriesPopup', locale, { oneColumn })}>
        <h3>{t(props.category)}</h3>

        {props.categories.map(category => (
          <Category {...category} key={category.nameKey} />
        ))}
      </div>
    </div>
  );
};

const Category: React.FC<LinkCategory> = ({ nameKey, icon, pageLink }) => {
  const { t } = useTranslation('common');

  return (
    <Link href={pageLink}>
      <div className={styles.category}>
        <div className={styles.categoryIcon}>
          <ReactSVG src={icon} />
        </div>

        <p>{t(nameKey)}</p>
      </div>
    </Link>
  );
};

export { CategoriesLinksPopup };
