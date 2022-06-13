import axios from 'axios';
import { NetworkError } from './NetworkError';
import { ServerError } from './ServerError';

class Fetcher {
  static async post(url: string, body: object) {
    try {
      const { data } = await axios.post(url, body);

      return data;
    } catch (error: any) {
      if (error.message === 'Network Error') throw new NetworkError();
      else throw new ServerError(error.response.data);
    }
  }
}

export { Fetcher };
