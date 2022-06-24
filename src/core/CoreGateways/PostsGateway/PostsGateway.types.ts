import { DonationCategory, PostStatus, PostType } from '../../../@types/Posts';

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

export interface Post {
  postId: string;
  title: string;
  description: string;
  type: PostType;
  category: DonationCategory | null;
  wilaya: string;
  status: PostStatus;
  active: boolean;
  pictures: string[];
  publisherId: string;
  publishDate: string;
  timeAgo: string;
  likesCount: number;
  sharesCount: number;
  ccp: string | null;
  ccpKey: string | null;
  rib: string | null;
}

export interface PostsGateway {
  getPosts: (filters?: GetPostsFilters) => Promise<{ posts: Post[]; totalNumberOfPosts: number }>;
}
