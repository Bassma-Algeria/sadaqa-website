class RestApiGateway {
  protected BASE_REST_URL: string;

  constructor() {
    const baseUrl = process.env.NEXT_PUBLIC_BACK_DOMAIN;
    if (!baseUrl) throw new Error('no backend api base url in the envirement');

    this.BASE_REST_URL = `${baseUrl}/api`;
  }
}

export { RestApiGateway };
