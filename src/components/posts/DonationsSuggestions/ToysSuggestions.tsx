import React from 'react';
import { useTranslation } from 'next-i18next';

import { PostsSuggestionsList } from '../PostsSuggestionsList/PostsSuggestionsList';

const ToysSuggestions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation"
      seeMoreLink="/donations/toys"
      title={t('toys')}
      category="toys"
      numOfPosts={8}
    />
  );
};

export { ToysSuggestions };
