import React from 'react';
import { useTranslation } from 'next-i18next';

import { PostsSuggestionsList } from '../../../../../components/Posts/PostsSuggestionsList/PostsSuggestionsList';

const FamiliesInNeed: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="family_in_need"
      seeMoreLink="/people_need_help/families_in_need"
      title={t('families-in-need')}
      numOfPosts={2}
    />
  );
};

export { FamiliesInNeed };
