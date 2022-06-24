import { useTranslation } from 'next-i18next';
import React from 'react';

import { PostsSuggestionsList } from '../PostsSuggestionsList/PostsSuggestionsList';

const ElectronicsSuggestions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation"
      seeMoreLink="/donations/electronics-appliances"
      title={t('electronics-appliances')}
      category="electronics-appliances"
      numOfPosts={8}
    />
  );
};

export { ElectronicsSuggestions };
