import { useTranslation } from 'next-i18next';
import React from 'react';

import { PostsSuggestionsList } from '../PostsSuggestionsList/PostsSuggestionsList';

const CarsAccessoriesSuggestions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation"
      seeMoreLink="/donations/cars-accessories"
      title={t('cars-accessories')}
      category="cars-accessories"
      numOfPosts={8}
    />
  );
};

export { CarsAccessoriesSuggestions };
