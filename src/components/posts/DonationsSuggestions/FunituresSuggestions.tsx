import { useTranslation } from 'next-i18next';
import React from 'react';

import { PostsSuggestionsList } from '../PostsSuggestionsList/PostsSuggestionsList';

const FurnituresSuggestions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation"
      seeMoreLink="/donations/home-furnitures"
      title={t('home-furnitures')}
      category="home-furnitures"
      numOfPosts={8}
    />
  );
};

export { FurnituresSuggestions };
