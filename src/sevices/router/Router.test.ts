import makeComponent from '../../../test/utils/makeComponent';
import getProps from '../../../test/utils/getProps';
import getTemplate from '../../../test/utils/getTemplate';
import { Router } from './Router';
import { Route } from './Route';
import Block from '../../abstracts/Block';
import sinon from 'sinon';
import * as renderDom from '../../utils/renderDom';
import { expect } from 'chai';
import { rootContainer } from '../../const/rootContainer';
import { changeJDOMLocation } from '../../../test/utils/changeJSDOMLocation';
import * as storeActions from '../store/Actions';

const page1 = makeComponent('div', getProps(), getTemplate({ id: 'page1' }));
const page2 = makeComponent('div', getProps(), getTemplate({ id: 'page1' }));
const error404Page = makeComponent(
  'div',
  getProps(),
  getTemplate({ id: 'error404' }),
);
const protectedPage = makeComponent(
  'div',
  getProps(),
  getTemplate({ id: 'protectedPage' }),
);

const routes = [
  { path: '/page1', page: page1, isProtected: false },
  { path: '/page2', page: page2, isProtected: false },
  { path: '/protectedPage', page: protectedPage, isProtected: true },
  { path: '/error404', page: error404Page, isProtected: false },
];
describe('Router', () => {
  let router: Router | undefined;
  let renderDomStub: sinon.SinonStub | undefined;

  beforeEach(() => {
    renderDomStub = sinon.stub(renderDom, 'renderDom');
    router = new Router();
    for (const route of routes) {
      router.addRoute(
        new Route(route.path, route.page as Block, route.isProtected),
      );
    }
  });

  afterEach(() => {
    router = undefined;
    renderDomStub = undefined;
  });

  it('renders right initial page', () => {
    window.location.pathname = '/';
    sinon.stub(router as Router, 'initialPagePath').get(() => '/page1');

    router?.enableRouting();

    expect(renderDomStub?.calledWith(rootContainer, page1)).to.equal(true);
  });

  it('redirects on right initial path', () => {
    sinon.stub(router as Router, 'initialPagePath').get(() => '/page1');
    changeJDOMLocation('/');

    router?.enableRouting();

    expect(window.location.pathname).to.equal('/page1');
  });

  it('redirects to error404 path', () => {
    sinon.stub(router as Router, 'initialPagePath').get(() => '/page1');
    changeJDOMLocation('/notExistingPath');

    router?.enableRouting();

    expect(window.location.pathname).to.equal('/error404');
  });

  it('renders unprotected page correctly', () => {
    changeJDOMLocation('/page2');

    router?.enableRouting();

    expect(renderDomStub?.calledWith(rootContainer, page2)).to.equal(true);
  });

  it('redirects on initial path, when truing to access protected route ', () => {
    sinon.stub(router as Router, 'initialPagePath').get(() => '/page1');
    changeJDOMLocation('/protectedPage');

    router?.enableRouting();

    expect(window.location.pathname).to.equal('/page1');
  });

  it('give access to protected route for authorized users', () => {
    sinon.stub(storeActions, 'getUserFromStore').returns({ user: 'someUser' });
    changeJDOMLocation('/protectedPage');

    router?.enableRouting();

    expect(window.location.pathname).to.equal('/protectedPage');
  });

  it('navigates correctly', () => {
    router?.enableRouting();
    router?.navigate('/page2');

    expect(renderDomStub?.calledWith(rootContainer, page2)).to.equal(true);
    expect(window.location.pathname).to.equal('/page2');
  });

  it('navigates back correctly', () => {
    const historyBackStub = sinon.stub(window.history, 'back');
    router?.enableRouting();
    router?.navigate('/page1');
    router?.navigate('/page2');

    router?.back();

    expect(historyBackStub.calledOnce).to.equal(true);
  });

  it('navigates forward correctly', () => {
    const historyForwardStub = sinon.stub(window.history, 'forward');
    router?.enableRouting();
    router?.navigate('/page1');
    router?.navigate('/page2');

    router?.forward();

    expect(historyForwardStub.calledOnce).to.equal(true);
  });

  describe('Route', () => {
    it('calls render dom with right params', () => {
      const route = new Route('page', page1);

      route.go();

      expect(renderDomStub?.calledWith(rootContainer, page1)).to.equal(true);
    });
  });
});
