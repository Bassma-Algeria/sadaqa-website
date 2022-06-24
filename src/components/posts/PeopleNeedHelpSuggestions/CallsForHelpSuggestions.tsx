import React from 'react';
import { useTranslation } from 'next-i18next';

import { PostsSuggestionsList } from '../PostsSuggestionsList/PostsSuggestionsList';

const CallsForHelpSuggestions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="call-for-help"
      seeMoreLink="/people-need-help/call-for-help"
      title={t('call-for-help')}
      numOfPosts={2}
    />
  );
};

export { CallsForHelpSuggestions };
