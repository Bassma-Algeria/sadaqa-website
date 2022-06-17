import { Fetcher } from '../utils/Fetcher';

import { AssociationSignupBody, AuthGateway, LoginBody, NormalUserSignupBody } from './AuthGateway';
import { RESTApiGateway } from '../utils/RESTApiGateway';
import { ServerError } from '../utils/ServerError';

class AuthRESTGateway extends RESTApiGateway implements AuthGateway {
  private readonly NORMAL_USER_ROLE_ID = 1;
  private readonly ASSOCIATION_ROLE_ID = 2;

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
      const data = await Fetcher.post(`${this.BASE_URL}/signup`, {
        ...body,
        roleId: this.NORMAL_USER_ROLE_ID,
      });

      return data.data.token;
    } catch (e) {
      if (e instanceof ServerError) throw new ServerError(e.error.error);
      throw e;
    }
  }

  async associationSignup(body: AssociationSignupBody): Promise<string> {
    try {
      const formData = new FormData();

      formData.append('roleId', this.ASSOCIATION_ROLE_ID.toString());

      for (const [key, value] of Object.entries(body)) {
        if (Array.isArray(value)) value.map(element => formData.append(key, element));
        else formData.append(key, value);
      }

      const data = await Fetcher.post(`${this.BASE_URL}/signup`, formData);

      return data.data.token;
    } catch (e) {
      if (e instanceof ServerError) throw new ServerError(e.error.error);
      throw e;
    }
  }
}

export { AuthRESTGateway };
