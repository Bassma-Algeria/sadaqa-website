import axios from 'axios';

import { IPost } from '../../@types/Posts';
import { RestApiGateway } from '../_Helpers_/RestApiGateway';
import { GetPostsFilters, IPostsGateway } from './PostsGateway.interface';

class PostsGateway extends RestApiGateway implements IPostsGateway {
  private BASE_URL: string;

  constructor() {
    super();
    this.BASE_URL = `${this.BASE_REST_URL}/posts`;
  }

  async getPosts(filters?: GetPostsFilters): Promise<IPost[]> {
    try {
      const { data } = await axios.get(`${this.BASE_URL}/${this.getPostQueryStrings(filters)}`);

      return data.data.map((post: any) => ({
        ...post,
        postId: post.post_id,
        publisherId: post.user_id,
        likesCount: post.likes_count,
        sharesCount: post.shares_count,
        thumbnailLink: post.thumbnail_link,
        ccpKey: post.ccp_key,
        createdAt: post.created_at,
      }));
    } catch (error: any) {
      throw error.response.data.error;
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

export { PostsGateway };
