type BasePath = 'users' | 'posts' | 'messages' | 'notifications' | 'visits';

class RESTApiGateway {
  protected readonly BASE_URL: string;

  constructor(basePath: BasePath) {
    const baseUrl = process.env.NEXT_PUBLIC_BACK_DOMAIN;
    if (!baseUrl) throw new Error('no backend api base url in the envirement');

    this.BASE_URL = `${baseUrl}/api/${basePath}`;
  }
}

export { RESTApiGateway };
