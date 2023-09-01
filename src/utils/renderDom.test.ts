/* eslint-disable @typescript-eslint/no-unused-expressions */
import { renderDom } from './renderDom';
import makeComponent from '../../test/utils/makeComponent';
import { expect } from 'chai';
import Block from '../abstracts/Block';
import sinon from 'sinon';
import getTemplate from '../../test/utils/getTemplate';

const makeContainer = (query = 'query', tagName = 'div') => {
  const container = document.createElement(tagName);
  container.id = query;
  return container;
};

describe('renderDom', () => {
  it('renders component to query', () => {
    const container = makeContainer('query');
    const template = getTemplate();
    const component = makeComponent('div', {}, template);

    document.body.append(container);
    renderDom('#query', component);

    const renderedComponent = document
      .querySelector('#query')
      ?.querySelector('#test');
    expect(renderedComponent).to.exist;
  });

  it('clears container from previous content', () => {
    const container = makeContainer('query');
    const component = makeComponent('div', {}, getTemplate());
    const previousContent = document.createElement('div');
    previousContent.id = 'previousContent';
    container.append(previousContent);
    document.body.append(container);

    renderDom('#query', component);
    expect(document.querySelector('#oldContent')).not.to.exist;
  });

  it('dispatches component did mount after rendering component', () => {
    const container = makeContainer('query');
    const component = makeComponent('div', {}, getTemplate());
    const dispatchComponentDidMountStub = sinon.stub(
      component,
      'dispatchComponentDidMount',
    );
    document.body.append(container);

    renderDom('#query', component as Block);

    expect(dispatchComponentDidMountStub.calledOnce).to.be.true;
  });
});
