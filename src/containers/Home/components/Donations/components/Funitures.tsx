import { useTranslation } from 'next-i18next';
import React from 'react';

import { PostsSuggestionsList } from '../../../../../components/Posts/PostsSuggestionsList/PostsSuggestionsList';

const Furnitures: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation"
      seeMoreLink="/donations/Home___Furnitures"
      title={t('home-furnitures')}
      category="home / furnitures"
      numOfPosts={8}
    />
  );
};

export { Furnitures };
