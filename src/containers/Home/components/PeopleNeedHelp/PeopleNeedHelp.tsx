import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';

import styles from '../../Home.module.scss';

import { Header } from '../../../../components/common/others/Headers';
import { Title } from '../../../../components/common/Title/Title';

import PeopleNeedHelpSubType from '../../../../components/people_need_help/PeopleNeedHelpSubType';

interface Props {}

const PeopleNeedHelp: React.FC<Props> = () => {
  const { t } = useTranslation('common');
  const { locale } = useRouter();

  return (
    <div className={`${styles.peopleNeedHelp} ${styles[locale!]}`}>
      <Title title={t('people-need-help')} variant="big" className={styles.title} />

      <PeopleNeedHelpSubType numOfPostsToShow={2} subType="call_for_help" />
      <PeopleNeedHelpSubType numOfPostsToShow={2} subType="family_in_need" />
      <PeopleNeedHelpSubType numOfPostsToShow={2} subType="donation_request" />
    </div>
  );
};

export { PeopleNeedHelp };
