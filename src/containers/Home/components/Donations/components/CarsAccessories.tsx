import { useTranslation } from 'next-i18next';
import React from 'react';

import { PostsSuggestionsList } from '../../../../../components/Posts/PostsSuggestionsList/PostsSuggestionsList';

const CarsAccessories: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation"
      seeMoreLink="/donations/Cars_Accessories"
      title={t('cars-accessories')}
      category="cars accessories"
      numOfPosts={8}
    />
  );
};

export { CarsAccessories };
