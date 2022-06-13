import axios from 'axios';

import { IPost } from '../../@types/Posts';
import { RESTApiGateway } from '../utils/RESTApiGateway';
import { GetPostsFilters, PostsGateway } from './PostsGateway';

class PostsRESTGateway extends RESTApiGateway implements PostsGateway {
  constructor() {
    super('posts');
  }

  async likePost(token: string, postId: number) {
    try {
      const { data } = await axios.put(`${this.BASE_URL}/likePost/${postId}`, {
        headers: { Authorization: token },
      });

      return data.data;
    } catch (error: any) {
      throw error.response.data.error;
    }
  }

  async sharePost(token: string, postId: number) {
    try {
      const { data } = await axios.put(`${this.BASE_URL}/sharePost/${postId}`, {
        headers: { Authorization: token },
      });

      return data.data;
    } catch (error: any) {
      throw error.response.data.error;
    }
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

export { PostsRESTGateway };
