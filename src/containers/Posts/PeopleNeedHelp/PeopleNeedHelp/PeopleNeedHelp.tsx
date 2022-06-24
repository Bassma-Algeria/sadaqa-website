import React from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import styles from '../../Posts.module.scss';

import { useRightToLeftDetector } from '../../../../utils/hooks/useRightToLeftDetector';

import PageMetaData from '../../../../components/common/others/PageMetaData';

import { Layout } from '../../../../components/Layout/Layout';
import { Title } from '../../../../components/common/Title/Title';
import { PostPageTags } from '../../../../components/Posts/PostPageTags/PostPageTags';
import { CallsForHelpSuggestions } from '../../../../components/Posts/PeopleNeedHelpSuggestions/CallsForHelpSuggestions';
import { FamiliesInNeedSuggestions } from '../../../../components/Posts/PeopleNeedHelpSuggestions/FamiliesInNeedSuggestions';
import { DonationRequestsSuggestions } from '../../../../components/Posts/PeopleNeedHelpSuggestions/DonationRequestsSuggestions';

const cx = classNames.bind(styles);

const PeopleNeedHelp: React.FC = () => {
  const { asPath } = useRouter();
  const { t } = useTranslation('common');
  const { rightToLeft } = useRightToLeftDetector();

  return (
    <Layout withFooter withSidebar withContainer>
      <PageMetaData title={'Sadaqa صدقة | People Need Help'} />

      <div className={cx('container', { rightToLeft })}>
        <PostPageTags tags={[{ name: t('people-need-help'), pageLink: asPath }]} />

        <Title variant="big" className={styles.title}>
          {t('people-need-help')}
        </Title>

        <CallsForHelpSuggestions />
        <FamiliesInNeedSuggestions />
        <DonationRequestsSuggestions />
      </div>
    </Layout>
  );
};

export { PeopleNeedHelp };
