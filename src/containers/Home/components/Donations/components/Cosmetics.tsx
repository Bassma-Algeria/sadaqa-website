import { useTranslation } from 'next-i18next';
import React from 'react';

import { PostsSuggestionsList } from '../../../../../components/Posts/PostsSuggestionsList/PostsSuggestionsList';

const Cosmetics: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation"
      category="cosmetics / hygiene"
      seeMoreLink="/donations/Cosmetics___Hygiene"
      title={t('cosmetics-hygiene')}
      numOfPosts={8}
    />
  );
};

export { Cosmetics };
