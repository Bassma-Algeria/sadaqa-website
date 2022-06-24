import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

import { postsGateway } from '../../../../../CoreGateways';
// import { NewPostBody } from '../../../../../CoreGateways/PostsGateway/PostsGateway';
import { NetworkError } from '../../../../../CoreGateways/utils/NetworkError';
import { ServerError } from '../../../../../CoreGateways/utils/ServerError';
import { DonationCategory, PostType } from '../../../../../@types/Posts';

interface NewPostBody {
  type: PostType | undefined;
  title: string;
  description: string;
  category: DonationCategory | undefined;
  wilaya: string;
  pictures: File[];
}

const initialValues: NewPostBody = {
  type: undefined,
  title: '',
  description: '',
  category: undefined,
  wilaya: '',
  pictures: [],
};

const useNewPostFormHandler = () => {
  const { t } = useTranslation(['common', 'new-post']);

  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [newPostValues, setNewPostValues] = useState<NewPostBody>(initialValues);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(undefined);

    try {
      // const {postId} = await postsGateway.createNewPost(newPostValues);
      // console.log(postId);
    } catch (error) {
      if (error instanceof NetworkError) setError(t('network-error'));
      else if (error instanceof ServerError)
        setError(t('new-post-creation-error', { ns: 'new-post' }));
    } finally {
      setIsLoading(false);
    }
  };

  return { setNewPostValues, newPostValues, error, isLoading, handleSubmit };
};

export { useNewPostFormHandler };
