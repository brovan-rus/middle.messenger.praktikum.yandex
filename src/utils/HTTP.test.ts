import HTTP from './HTTP';
import sinon, { SinonStub } from 'sinon';
import { expect } from 'chai';

const baseUrl = 'api';
import * as queryStringify from './queryStringify';

describe('HTTP', () => {
  let http: HTTP | undefined;
  let request: SinonStub | undefined;

  beforeEach(() => {
    http = new HTTP(baseUrl);
    request = sinon.stub(http, 'request').callsFake(() => Promise.resolve());
  });

  afterEach(() => {
    http = undefined;
    request = undefined;
  });

  it('makes get request with correct url', () => {
    http?.get('get', {});

    expect(request?.calledWithMatch(`${baseUrl}/get`, {}, 'GET')).to.equal(
      true,
    );
  });

  it('get request calls queryStringify with correct args', () => {
    const queryStringifyStub = sinon.stub(queryStringify, 'queryStringify');
    const param = { param1: 'name', param2: 'password' };
    http?.get('get', { data: param });

    expect(queryStringifyStub.calledWithMatch(param));
  });

  it('makes put request with correct url', () => {
    http?.put('put', {});

    expect(request?.calledWithMatch(`${baseUrl}/put`, {}, 'PUT')).to.equal(
      true,
    );
  });

  it('makes post request with correct url', () => {
    http?.post('post', {});

    expect(request?.calledWithMatch(`${baseUrl}/post`, {}, 'POST')).to.equal(
      true,
    );
  });

  it('makes delete request with correct url', () => {
    http?.delete('delete', {});

    expect(
      request?.calledWithMatch(`${baseUrl}/delete`, {}, 'DELETE'),
    ).to.equal(true);
  });
});
