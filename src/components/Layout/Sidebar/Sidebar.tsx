import React from 'react';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import styles from './Sidebar.module.scss';

import { LinkCategory } from '../../../@types/Links';

import { DONATIONS_CATEGORIES } from '../../../utils/constants/DonationsCategories';
import { PEOPLE_NEED_HELP_CATEGORIES } from '../../../utils/constants/PeopleNeedHelpCategories';

import { useRightToLeftDetector } from '../../../utils/hooks/useRightToLeftDetector';

const cx = classNames.bind(styles);

const Sidebar: React.FC = () => {
  const { t } = useTranslation('common');
  const { rightToLeft } = useRightToLeftDetector();

  return (
    <aside className={cx('sidebar', { rightToLeft })}>
      <section>
        <h4>{t('people-need-help')}</h4>
        {PEOPLE_NEED_HELP_CATEGORIES.map(category => (
          <SidebarLink {...category} key={category.nameKey} />
        ))}
      </section>

      <section>
        <h4>{t('donations')}</h4>
        {DONATIONS_CATEGORIES.map(category => (
          <SidebarLink {...category} key={category.nameKey} />
        ))}
      </section>
    </aside>
  );
};

const SidebarLink: React.FC<LinkCategory> = ({ icon, nameKey, pageLink }) => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.sidebarLink}>
      <div className={styles.iconContainer}>
        <ReactSVG src={icon} />
      </div>

      <Link href={pageLink}>
        <p>{t(nameKey)}</p>
      </Link>
    </div>
  );
};

export { Sidebar };
