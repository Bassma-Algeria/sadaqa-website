import { useTranslation } from 'next-i18next';
import React from 'react';

import { PostsSuggestionsList } from '../../../../../components/Posts/PostsSuggestionsList/PostsSuggestionsList';

const Clothes: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation"
      category="clothes / accessories"
      seeMoreLink="/donations/Clothes___Accessories"
      title={t('clothes-accessories')}
      numOfPosts={8}
    />
  );
};

export { Clothes };
