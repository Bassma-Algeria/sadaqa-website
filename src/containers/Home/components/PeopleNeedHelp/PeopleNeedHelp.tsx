import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';

import styles from '../../Home.module.scss';

import { Title } from '../../../../components/common/Title/Title';

import { DonationRequests } from './components/DonationRequests';
import { CallsForHelp } from './components/CallsForHelp';
import { FamiliesInNeed } from './components/FamiliesInNeed';

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
