import { useTranslation } from 'next-i18next';
import React from 'react';

import { PostsSuggestionsList } from '../../../../../components/Posts/PostsSuggestionsList/PostsSuggestionsList';

const CallsForHelp: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="call_for_help"
      seeMoreLink="/people_need_help/call_for_help"
      title={t('call-for-help')}
    />
  );
};

export { CallsForHelp };
