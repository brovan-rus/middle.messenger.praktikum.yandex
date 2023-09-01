import sinon from 'sinon';
import { jsdom } from './jsdom';

export const changeJDOMLocation = (path: string) => {
  const myFakeTopForTesting = sinon.stub() as unknown as typeof jsdom.window;
  jsdom.reconfigure({
    windowTop: myFakeTopForTesting,
    url: `https://www.example.com${path}`,
  });
};
