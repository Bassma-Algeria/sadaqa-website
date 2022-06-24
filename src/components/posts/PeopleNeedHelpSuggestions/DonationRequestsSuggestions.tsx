import { useTranslation } from 'next-i18next';
import React from 'react';

import { PostsSuggestionsList } from '../PostsSuggestionsList/PostsSuggestionsList';

const DonationRequestsSuggestions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation-requests"
      seeMoreLink="/people-need-help/donation-requests"
      title={t('donation-requests')}
      numOfPosts={2}
    />
  );
};

export { DonationRequestsSuggestions };
