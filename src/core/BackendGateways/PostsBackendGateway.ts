import { Fetcher } from './utils/Fetcher';
import { RESTApiGateway } from './utils/RESTApiGateway';
import { GetPostsFilters } from '../CoreGateways/PostsGateway/PostsGateway.types';
import { ServerError } from './utils/ServerError';

export interface PostResponseModel {
  post_id: string;
  title: string;
  description: string;
  active: boolean;
  wilaya: string;
  likes_count: number;
  shares_count: number;
  created_at: number;
  type_id: number;
  category: string | null;
  user_id: string;
  ccp: string | null;
  thumbnail_link: string | null;
  ccp_key: string | null;
  rib: string | null;
}

class PostsBackendGateway extends RESTApiGateway {
  constructor() {
    super('posts');
  }

  async getPosts(
    filterQueryString: string,
  ): Promise<{ posts: PostResponseModel[]; totalNumberOfPosts: number }> {
    try {
      const { data } = await Fetcher.get(`${this.BASE_URL}/${filterQueryString}`);

      return { posts: data, totalNumberOfPosts: 10 };
    } catch (e: any) {
      if (e instanceof ServerError) throw new ServerError(e.error.error);
      throw e;
    }
  }

  private getPostQueryStrings(filters?: GetPostsFilters): string {
    let queryString = '';
    if (!filters) return queryString;

    const {
      numOfChunk,
      numOfPostsPerChunk,
      postType,
      category,
      shouldBeActive,
      wilaya,
      publisherId,
    } = filters;

    if (numOfChunk) queryString += `numOfPage=${numOfChunk}&`;
    if (numOfPostsPerChunk) queryString += `numOfAdsPerPage=${numOfPostsPerChunk}&`;
    if (postType) queryString += `adType=${postType}&`;
    if (category) queryString += `category=${category}&`;
    if (shouldBeActive !== undefined) queryString += `active=${shouldBeActive}&`;
    if (wilaya) queryString += `wilaya=${wilaya}&`;
    if (publisherId) queryString += `userId=${publisherId}&`;

    return `?${queryString.slice(0, -1)}`;
  }
}

export { PostsBackendGateway };
