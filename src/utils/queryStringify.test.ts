import { queryStringify } from './queryStringify';
import { expect } from 'chai';

describe('queryStringify', () => {
  it('handles object correctly', () => {
    const obj = { param1: 'name', param2: 'password' };
    expect(queryStringify(obj)).to.equal('param1=name&param2=password');
  });

  it('handles object with array correctly', () => {
    const obj = {
      param1: 'name',
      param2: 'password',
      param3: ['user1', 'user2', 'user3'],
    };
    expect(queryStringify(obj)).to.equal(
      'param1=name&param2=password&param3[0]=user1&param3[1]=user2&param3[2]=user3',
    );
  });

  it('return empty string on empty object', () => {
    expect(queryStringify({})).to.equal('');
  });

  it('handles nested objects correctly', () => {
    const nestedObj = {
      param1: 'button',
      param2: {
        type: 'form',
        length: '100px',
        text: 'send',
      },
      param3: 'section',
    };

    expect(queryStringify(nestedObj)).to.equal(
      'param1=button&param2[type]=form&param2[length]=100px&param2[text]=send&param3=section',
    );
  });

  it('handles special symbols', () => {
    const obj = {
      param1: '2+3%',
    };

    expect(queryStringify(obj)).to.equal('param1=2%2B3%25');
  });
});
