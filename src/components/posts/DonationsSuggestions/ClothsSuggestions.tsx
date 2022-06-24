import { useTranslation } from 'next-i18next';
import React from 'react';

import { PostsSuggestionsList } from '../PostsSuggestionsList/PostsSuggestionsList';

const ClothsSuggestions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation"
      category="clothes-accessories"
      seeMoreLink="/donations/clothes-accessories"
      title={t('clothes-accessories')}
      numOfPosts={8}
    />
  );
};

export { ClothsSuggestions };
