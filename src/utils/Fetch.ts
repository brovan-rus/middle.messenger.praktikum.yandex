import { queryStringify } from './queryStringify';
import { EmptyObject } from '../types/emptyObject';

enum METHODS {
  GET = 'Get',
  POST = 'Post',
  PUT = 'Put',
  DELETE = 'Delete',
}

type Options =
  | {
      headers?: Record<string, string>;
      timeout: number;
      data: Record<string, any>;
    }
  | EmptyObject;

type FetchMethod = (
  url: URL | string,
  options: Options | EmptyObject,
) => Promise<unknown>;

class Fetch {
  get: FetchMethod = (url, options = {}) => {
    return this.request(
      `${url}${queryStringify(options.data)}`,
      { ...options },
      METHODS.GET,
      options.timeout,
    );
  };

  put: FetchMethod = (url, options = {}) => {
    return this.request(url, { ...options }, METHODS.PUT, options.timeout);
  };

  post: FetchMethod = (url, options = {}) => {
    return this.request(url, { ...options }, METHODS.POST, options.timeout);
  };

  delete: FetchMethod = (url, options = {}) => {
    return this.request(url, { ...options }, METHODS.DELETE, options.timeout);
  };

  request = (
    url: string | URL,
    options: Options,
    method: METHODS,
    timeout = 5000,
  ) => {
    return new Promise((resolve, reject) => {
      const { data, headers } = options;
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      console.log(xhr);
      xhr.addEventListener('abort', reject);
      // eslint-disable-next-line unicorn/prefer-add-event-listener
      xhr.onerror = reject;
      xhr.ontimeout = reject;
      xhr.timeout = timeout;
      xhr.addEventListener('load', function () {
        resolve(xhr);
      });
      if (headers) {
        for (const key of Object.keys(headers)) {
          xhr.setRequestHeader(key, headers[key]);
        }
      }
      if (method === METHODS.GET || data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}

export default new Fetch();
