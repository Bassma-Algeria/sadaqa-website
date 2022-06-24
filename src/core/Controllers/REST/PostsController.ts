import { PostType } from '../../../@types/Posts';
import { GetPostsFilters } from '../../CoreGateways/PostsGateway/PostsGateway.types';

class PostsController {
  getPosts(filters?: GetPostsFilters) {
    let filterQueryString = '';
    if (!filters) return { filterQueryString };

    const {
      numOfChunk,
      numOfPostsPerChunk,
      postType,
      category,
      shouldBeActive,
      wilaya,
      publisherId,
    } = filters;

    if (numOfChunk) filterQueryString += `numOfPage=${numOfChunk}&`;
    if (numOfPostsPerChunk) filterQueryString += `numOfAdsPerPage=${numOfPostsPerChunk}&`;
    if (postType) filterQueryString += `adType=${POST_TYPE_BACKEND_MAPPER[postType]}&`;
    if (category) filterQueryString += `category=${category}&`;
    if (shouldBeActive !== undefined) filterQueryString += `active=${shouldBeActive}&`;
    if (wilaya) filterQueryString += `wilaya=${wilaya}&`;
    if (publisherId) filterQueryString += `userId=${publisherId}&`;

    return { filterQueryString: `?${filterQueryString.slice(0, -1)}` };
  }
}

const POST_TYPE_BACKEND_MAPPER: { [key in PostType]: number } = {
  donation: 0,
  'donation-requests': 1,
  'families-in-need': 2,
  'call-for-help': 3,
};

export { PostsController };
