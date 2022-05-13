import { useTranslation } from 'next-i18next';
import React from 'react';

import { PostsSuggestionsList } from '../../../../../components/Posts/PostsSuggestionsList/PostsSuggestionsList';

const Food: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation"
      seeMoreLink="/donations/Food"
      title={t('food')}
      category="food"
      numOfPosts={8}
    />
  );
};

export { Food };
