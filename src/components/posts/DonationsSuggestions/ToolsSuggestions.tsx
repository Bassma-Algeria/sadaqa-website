import React from 'react';
import { useTranslation } from 'next-i18next';

import { PostsSuggestionsList } from '../PostsSuggestionsList/PostsSuggestionsList';

const ToolsSuggestions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation"
      seeMoreLink="/donations/Tools"
      title={t('tools')}
      category="tools"
      numOfPosts={8}
    />
  );
};

export { ToolsSuggestions };
