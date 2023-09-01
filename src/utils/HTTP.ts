import { queryStringify } from './queryStringify';
import { baseUrl } from '../const/api';

enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type Options = {
  headers?: Record<string, string>;
  timeout?: number;
  data?: Record<string, unknown> | FormData;
};

type FetchMethod = (url: URL | string, options: Options) => Promise<unknown>;

class HTTP {
  private readonly _baseUrl: string | URL;

  private readonly _withCredentials: boolean;

  constructor(url: string | URL, withCredentials = false) {
    this._baseUrl = `${url ? `${baseUrl}/${url}` : `${baseUrl}`}`;
    this._withCredentials = withCredentials;
  }

  public get: FetchMethod = (url, options = {}) => {
    return this.request(
      `${this._baseUrl}/${url}${queryStringify(options.data)}`,
      options,
      METHODS.GET,
      options.timeout,
    );
  };

  put: FetchMethod = (url, options = {}) => {
    return this.request(
      `${this._baseUrl}/${url}`,
      options,
      METHODS.PUT,
      options.timeout,
    );
  };

  post: FetchMethod = (url, options = {}) => {
    return this.request(
      `${this._baseUrl}/${url}`,
      options,
      METHODS.POST,
      options.timeout,
    );
  };

  delete: FetchMethod = (url, options = {}) => {
    return this.request(
      `${this._baseUrl}/${url}`,
      options,
      METHODS.DELETE,
      options.timeout,
    );
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
      xhr.addEventListener('abort', reject);
      // eslint-disable-next-line unicorn/prefer-add-event-listener
      xhr.onerror = reject;
      xhr.ontimeout = reject;
      xhr.timeout = timeout;
      xhr.withCredentials = this._withCredentials;
      xhr.addEventListener('load', function () {
        resolve(xhr);
      });
      if (headers) {
        for (const key of Object.keys(headers)) {
          xhr.setRequestHeader(key, headers[key]);
        }
      }
      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        if (data instanceof FormData) {
          xhr.send(data);
        } else {
          xhr.send(JSON.stringify(data));
        }
      }
    });
  };
}

export default HTTP;
