import { useTranslation } from 'next-i18next';
import React from 'react';

import { PostsSuggestionsList } from '../PostsSuggestionsList/PostsSuggestionsList';

const CosmeticsSuggestions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation"
      category="cosmetics-hygiene"
      seeMoreLink="/donations/cosmetics-hygiene"
      title={t('cosmetics-hygiene')}
      numOfPosts={8}
    />
  );
};

export { CosmeticsSuggestions };
