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

export interface IPostsGateway {
  getPosts: (filters?: GetPostsFilters) => Promise<IPost[]>;
}
