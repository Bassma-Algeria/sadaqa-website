import { useTranslation } from 'next-i18next';
import React from 'react';

import { PostsSuggestionsList } from '../../../../../components/Posts/PostsSuggestionsList/PostsSuggestionsList';

const Toys: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation"
      seeMoreLink="/donations/Games___Toys"
      title={t('toys')}
      category="games / toys"
      numOfPosts={8}
    />
  );
};

export { Toys };
