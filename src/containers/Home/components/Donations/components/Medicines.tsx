import { useTranslation } from 'next-i18next';
import React from 'react';

import { PostsSuggestionsList } from '../../../../../components/Posts/PostsSuggestionsList/PostsSuggestionsList';

const Medicines: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation"
      seeMoreLink="/donations/Health___Medicines"
      title={t('health-medicines')}
      category="health / medicines"
      numOfPosts={8}
    />
  );
};

export { Medicines };
