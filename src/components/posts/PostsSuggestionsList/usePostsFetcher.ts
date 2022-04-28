import { postsGateway } from '../../../Gateways';
import { GetPostsFilters } from '../../../Gateways/PostsGateway/PostsGateway.interface';
import { useDataFetcher } from './useDataFetcher';

const usePostsFetcher = (filters?: GetPostsFilters) => {
  const { data: posts, refrech, status } = useDataFetcher(() => postsGateway.getPosts(filters));

  return { posts, status, refrech };
};

export { usePostsFetcher };
