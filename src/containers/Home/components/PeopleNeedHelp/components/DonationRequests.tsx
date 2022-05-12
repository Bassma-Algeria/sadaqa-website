import { useTranslation } from 'next-i18next';
import React from 'react';

import { PostsSuggestionsList } from '../../../../../components/Posts/PostsSuggestionsList/PostsSuggestionsList';

const DonationRequests: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation_request"
      seeMoreLink="/people_need_help/donation_requests"
      title={t('donation-requests')}
    />
  );
};

export { DonationRequests };
