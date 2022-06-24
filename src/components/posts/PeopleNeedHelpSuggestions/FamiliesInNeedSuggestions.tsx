import React from 'react';
import { useTranslation } from 'next-i18next';

import { PostsSuggestionsList } from '../PostsSuggestionsList/PostsSuggestionsList';

const FamiliesInNeedSuggestions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="families-in-need"
      seeMoreLink="/people-need-help/families-in-need"
      title={t('families-in-need')}
      numOfPosts={2}
    />
  );
};

export { FamiliesInNeedSuggestions };
