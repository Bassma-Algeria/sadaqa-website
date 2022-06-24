import axios from 'axios';
import { NetworkError } from './NetworkError';
import { ServerError } from './ServerError';

interface Options {
  headers: object;
}

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

  static async get(url: string, options?: Options) {
    try {
      const { data } = await axios.get(url, options);

      return data;
    } catch (error: any) {
      if (error.message === 'Network Error') throw new NetworkError();
      else throw new ServerError(error.response.data);
    }
  }
}

export { Fetcher };
