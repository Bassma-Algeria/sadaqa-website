import React from 'react';
import { useTranslation } from 'next-i18next';

import { PostsSuggestionsList } from '../PostsSuggestionsList/PostsSuggestionsList';

const OthersSuggestions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation"
      seeMoreLink="/donations/Others"
      title={t('others')}
      category="others"
      numOfPosts={8}
    />
  );
};

export { OthersSuggestions };
