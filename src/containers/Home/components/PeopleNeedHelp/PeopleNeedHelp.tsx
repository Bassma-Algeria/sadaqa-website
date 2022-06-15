import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import styles from '../../Home.module.scss';

import { CallsForHelp } from './components/CallsForHelp';
import { FamiliesInNeed } from './components/FamiliesInNeed';
import { DonationRequests } from './components/DonationRequests';
import { Title } from '../../../../components/common/Title/Title';

interface Props {}

const PeopleNeedHelp: React.FC<Props> = () => {
  const { t } = useTranslation('common');
  const { locale } = useRouter();

  return (
    <div className={`${styles.postsSection} ${styles[locale!]}`}>
      <Title title={t('people-need-help')} variant="big" className={styles.title} />

      <CallsForHelp />
      <FamiliesInNeed />
      <DonationRequests />
    </div>
  );
};

export { PeopleNeedHelp };
