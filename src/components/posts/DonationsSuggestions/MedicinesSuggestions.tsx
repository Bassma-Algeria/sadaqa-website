import React from 'react';
import { useTranslation } from 'next-i18next';

import { PostsSuggestionsList } from '../PostsSuggestionsList/PostsSuggestionsList';

const MedicinesSuggestions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation"
      seeMoreLink="/donations/health-medicines"
      title={t('health-medicines')}
      category="health-medicines"
      numOfPosts={8}
    />
  );
};

export { MedicinesSuggestions };
