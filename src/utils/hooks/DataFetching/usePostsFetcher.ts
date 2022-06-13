import { postsGateway } from '../../../CoreGateways';
import type { GetPostsFilters } from '../../../CoreGateways/PostsGateway/PostsGateway';

import { useDataFetcher } from './useDataFetcher';

const usePostsFetcher = (filters?: GetPostsFilters) => {
  const { data: posts, refrech, status } = useDataFetcher(() => postsGateway.getPosts(filters));

  return { posts, status, refrech };
};

export { usePostsFetcher };
