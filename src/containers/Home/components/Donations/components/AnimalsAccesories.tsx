import { useTranslation } from 'next-i18next';
import React from 'react';

import { PostsSuggestionsList } from '../../../../../components/Posts/PostsSuggestionsList/PostsSuggestionsList';

const AnimalsAccessories: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation"
      seeMoreLink="/donations/Animals___Accessories"
      title={t('animales-accessories')}
      category="animals / accessories"
      numOfPosts={8}
    />
  );
};

export { AnimalsAccessories };
