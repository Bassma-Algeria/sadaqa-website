import { Fetcher } from '../utils/Fetcher';

import { AuthGateway, LoginBody, NormalUserSignupBody } from './AuthGateway';
import { RESTApiGateway } from '../utils/RESTApiGateway';
import { NetworkError } from '../utils/NetworkError';
import { ServerError } from '../utils/ServerError';

class AuthRESTGateway extends RESTApiGateway implements AuthGateway {
  constructor() {
    super('users');
  }

  async login(body: LoginBody): Promise<string> {
    try {
      const data = await Fetcher.post(`${this.BASE_URL}/login`, body);

      return data.data.token;
    } catch (e) {
      if (e instanceof ServerError) throw new ServerError(e.error.error);
      throw e;
    }
  }

  async normalUserSignup(body: NormalUserSignupBody): Promise<string> {
    try {
      const data = await Fetcher.post(`${this.BASE_URL}/signup`, { ...body, roleId: 1 });

      return data.data.token;
    } catch (e) {
      if (e instanceof ServerError) throw new ServerError(e.error.error);
      throw e;
    }
  }
}

export { AuthRESTGateway };
