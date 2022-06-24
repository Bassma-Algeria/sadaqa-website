import { postsBackendGateway } from '../../BackendGateways';
import { postsController } from '../../Controllers/REST';
import { postsPresenter } from '../../Presenters';
import { FAKE_POSTS } from '../_fakes_/FakePosts';
import { GetPostsFilters, Post } from './PostsGateway.types';

class PostsGateway {
  constructor() {}

  async getPosts(
    filters?: GetPostsFilters,
  ): Promise<{ posts: Post[]; totalNumberOfPosts: number }> {
    // const { filterQueryString } = postsController.getPosts(filters);
    // const { posts: postsResponse, totalNumberOfPosts } = await postsBackendGateway.getPosts(
    //   filterQueryString,
    // );
    // const posts = postsPresenter.responseModelsToViewModels(postsResponse);

    return { posts: FAKE_POSTS, totalNumberOfPosts: 40 };
  }
}

export { PostsGateway };
