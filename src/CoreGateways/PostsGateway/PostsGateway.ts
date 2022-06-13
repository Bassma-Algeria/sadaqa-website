import { DonationCategory, IPost, PostType } from '../../@types/Posts';

export interface GetPostsFilters {
  /** @default all */
  category?: DonationCategory;

  /** @default all */
  postType?: PostType;

  /** @default all */
  wilaya?: string;

  /** @default all */
  publisherId?: number;

  /** @default true */
  shouldBeActive?: boolean;

  /** @default 1 */
  numOfChunk?: number;

  /** @default 20 */
  numOfPostsPerChunk?: number;
}

export interface PostsGateway {
  getPosts: (filters?: GetPostsFilters) => Promise<IPost[]>;
  likePost: (token: string, postId: number) => Promise<void>;
  sharePost: (token: string, postId: number) => Promise<void>;
}
