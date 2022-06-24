import { useTranslation } from 'next-i18next';
import React from 'react';

import { PostsSuggestionsList } from '../PostsSuggestionsList/PostsSuggestionsList';

const AnimalsAccessoriesSuggestions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation"
      seeMoreLink="/donations/Animals___Accessories"
      title={t('animales-accessories')}
      category="animales-accessories"
      numOfPosts={8}
    />
  );
};

export { AnimalsAccessoriesSuggestions };
