import { useTranslation } from 'next-i18next';
import React from 'react';

import { PostsSuggestionsList } from '../../../../../components/Posts/PostsSuggestionsList/PostsSuggestionsList';

const Electronics: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation"
      seeMoreLink="/donations/Electronics___Appliances"
      title={t('electronics-appliances')}
      category="electronics / appliances"
      numOfPosts={8}
    />
  );
};

export { Electronics };
