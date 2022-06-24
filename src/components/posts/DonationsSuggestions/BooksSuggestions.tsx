import { useTranslation } from 'next-i18next';
import React from 'react';

import { PostsSuggestionsList } from '../PostsSuggestionsList/PostsSuggestionsList';

const BooksSuggestions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PostsSuggestionsList
      postType="donation"
      seeMoreLink="/donations/Books___Magazines"
      title={t('books-magazines')}
      category="books-magazines"
      numOfPosts={8}
    />
  );
};

export { BooksSuggestions };
