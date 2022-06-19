import { DonationCategory, Post, PostType } from '../../@types/Posts';

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

// enum PostType {
//   DONATION, DONATION_REQUEST, CALL_FOR_HELP, FAMILY_IN_NEED
// }

export interface NewPostBody {
  typeId: number;
  title: string;
  description: string;
  wilaya: string;
  category: string;
  pictures: File[];
}

export interface PostsGateway {
  getPosts: (filters?: GetPostsFilters) => Promise<Post[]>;
  likePost: (token: string, postId: number) => Promise<void>;
  sharePost: (token: string, postId: number) => Promise<void>;
  createNewPost: (body: NewPostBody) => Promise<{ postId: string }>;
}
