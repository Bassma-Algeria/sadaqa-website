import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import styles from '../NewPost.module.scss';

const TopHeaders: React.FC = () => {
  const { t } = useTranslation('new-post');

  return (
    <div className={styles.topHeaders}>
      <h1>{t('create-new-advertisement')}</h1>

      <p className={styles.note}>
        {t('note')}*: {t('only-associations-can-publish-call-for-help-or-family-in-need')} <br />{' '}
        <Link href="/term-of-use">{t('see-why')}</Link>
      </p>
    </div>
  );
};

export { TopHeaders };
