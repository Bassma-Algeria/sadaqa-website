import { useTranslation } from 'next-i18next';
import React from 'react';

import { PostsSuggestionsList } from '../../../../../components/Posts/PostsSuggestionsList/PostsSuggestionsList';

const Tools: React.FC = () => {
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

export { Tools };
