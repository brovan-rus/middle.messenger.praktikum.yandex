/* eslint-disable @typescript-eslint/no-unused-expressions */
import { expect } from 'chai';
import makeComponent from '../../../test/utils/makeComponent';
import sinon from 'sinon';
import getTemplate from '../../../test/utils/getTemplate';
import getProps from '../../../test/utils/getProps';

describe('Block', () => {
  it('renders template without props', () => {
    const component = makeComponent('div', {}, getTemplate());
    const rendered = component.render();

    expect(rendered.querySelector('#test')).to.exist;
  });

  it('renders initial props', () => {
    const component = makeComponent('div', getProps(), getTemplate());

    expect(
      component.getContent().querySelector('#test')?.textContent?.trim(),
    ).to.equal('some text');
  });

  it('renders right tag', () => {
    const tag = 'section';
    const component = makeComponent(tag, getProps(), getTemplate());

    document.body.append(component.getContent());

    expect(document.body.querySelector(tag)).exist;
  });

  it('re renders on props change', () => {
    const component = makeComponent('div', getProps(), getTemplate());
    const renderStub = sinon.stub(component, 'render');

    component.setProps({ text: 'changed text' });

    expect(renderStub.calledTwice).to.equal(true);
  });

  it('changes content after changing props', () => {
    const component = makeComponent('div', getProps(), getTemplate());

    component.setProps(getProps({ text: 'some new content' }));

    expect(
      component.getContent().querySelector('#test')?.textContent?.trim(),
    ).to.equal('some new content');
  });

  it('adds events', () => {
    const eventFunctionStub = sinon.stub();
    const component = makeComponent(
      'div',
      getProps({
        text: 'someText',
        events: {
          click: () => {
            eventFunctionStub();
          },
        },
      }),
      getTemplate(),
    );

    document.body.append(component.getContent());
    component.dispatchComponentDidMount();

    const element = document.body.querySelector('#test') as HTMLElement;
    element.click();
    expect(eventFunctionStub.calledOnce).to.equal(true);
  });

  it('saves events after re rending', () => {
    const eventFunctionStub = sinon.stub();
    const component = makeComponent(
      'div',
      getProps({
        text: 'someText',
        events: {
          click: () => {
            eventFunctionStub();
          },
        },
      }),
      getTemplate(),
    );

    document.body.append(component.getContent());
    component.dispatchComponentDidMount();
    component.setProps({ text: 'another text' });

    const element = document.body.querySelector('#test') as HTMLElement;
    element.click();
    expect(eventFunctionStub.calledOnce).to.equal(true);
  });

  describe('children components', () => {
    it('renders children component', () => {
      const childComponent = makeComponent(
        'div',
        getProps(),
        getTemplate({ id: 'testChild' }),
      );
      const props = getProps({
        text: 'some text',
        Child: childComponent,
      });
      const component = makeComponent(
        'div',
        props,
        getTemplate({ child: 'Child' }),
      );

      expect(component.getContent().querySelector('#testChild')).exist;
    });

    it('renews attributes', () => {
      const component = makeComponent('div', getProps(), getTemplate());
      document.body.append(component.getContent());
      component.dispatchComponentDidMount();

      component.renewAttributes({ ['data-test']: 'newAttribute' });
      const wrapper = document.querySelector('#test')
        ?.parentNode as HTMLElement;

      expect(wrapper?.getAttribute('data-test')).to.equal('newAttribute');
    });

    it('dispatches children component did mount', () => {
      const childComponent = makeComponent(
        'div',
        getProps(),
        getTemplate({
          id: 'testChild',
        }),
      );
      const props = getProps({
        text: 'some text',
        Child: childComponent,
      });
      const dispatchChildComponentDidMountStub = sinon.stub(
        childComponent,
        'dispatchComponentDidMount',
      );

      const component = makeComponent(
        'div',
        props,
        getTemplate({ child: 'Child' }),
      );
      component.dispatchComponentDidMount();

      expect(dispatchChildComponentDidMountStub.calledOnce).to.equal(true);
    });

    it('render changes after children props changed', () => {
      const childComponent = makeComponent(
        'div',
        getProps({ text: 'child text' }),
        getTemplate({ id: 'testChild' }),
      );
      const props = getProps({
        text: 'some text',
        Child: childComponent,
      });
      const component = makeComponent(
        'div',
        props,
        getTemplate({ child: 'Child' }),
      );
      childComponent.setProps({ text: 'changed text' });

      expect(
        component.getContent().querySelector('#testChild')?.textContent?.trim(),
      ).to.equal('changed text');
    });

    it('renders array of children', () => {
      const childrenArray = [
        makeComponent(
          'div',
          getProps({ testChild: 'text' }),
          getTemplate({ id: 'testChild1' }),
        ),
        makeComponent(
          'div',
          getProps({ testChild2: 'text' }),
          getTemplate({ id: 'testChild2' }),
        ),
      ];
      const component = makeComponent(
        'div',
        getProps({ childrenArray }),
        getTemplate({ childrenArray: 'childrenArray' }),
      );

      const renderedChild1 = component
        .getContent()
        .querySelector('#testChild1');
      const renderedChild2 = component
        .getContent()
        .querySelector('#testChild2');

      expect(renderedChild1).exist;
      expect(renderedChild2).exist;
    });
  });
});
