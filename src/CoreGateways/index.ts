import { AuthGateway } from './AuthGateway/AuthGateway';
import { AuthRESTGateway } from './AuthGateway/AuthRESTGateway';
import { PostsGateway } from './PostsGateway/PostsGateway';
import { PostsRESTGateway } from './PostsGateway/PostsRESTGateway';

const postsGateway: PostsGateway = new PostsRESTGateway();
const authGateway: AuthGateway = new AuthRESTGateway();

export { postsGateway, authGateway };
