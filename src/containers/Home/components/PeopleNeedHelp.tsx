import React from 'react';
import classNames from 'classnames/bind';

import { useTranslation } from 'next-i18next';

import styles from '../Home.module.scss';

import { useRightToLeftDetector } from '../../../utils/hooks/useRightToLeftDetector';

import { Title } from '../../../components/common/Title/Title';
import { CallsForHelpSuggestions } from '../../../components/Posts/PeopleNeedHelpSuggestions/CallsForHelpSuggestions';
import { FamiliesInNeedSuggestions } from '../../../components/Posts/PeopleNeedHelpSuggestions/FamiliesInNeedSuggestions';
import { DonationRequestsSuggestions } from '../../../components/Posts/PeopleNeedHelpSuggestions/DonationRequestsSuggestions';

const cx = classNames.bind(styles);

interface Props {}

const PeopleNeedHelp: React.FC<Props> = () => {
  const { t } = useTranslation('common');
  const { rightToLeft } = useRightToLeftDetector();

  return (
    <div className={cx('postsSection', { rightToLeft })}>
      <Title variant="big" className={styles.title}>
        {t('people-need-help')}
      </Title>

      <CallsForHelpSuggestions />
      <FamiliesInNeedSuggestions />
      <DonationRequestsSuggestions />
    </div>
  );
};

export { PeopleNeedHelp };
