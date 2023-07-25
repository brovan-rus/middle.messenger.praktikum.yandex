import Handlebars from 'handlebars';
import EventBus from './EventBus';
import { Callback } from '../types/callback';
import { Props } from '../types/props';
import { v4 } from 'uuid';
import isArray = Handlebars.Utils.isArray;

type Meta = {
  tagName: string;
  propsAndChildren: Props;
};

type DocumentElement = HTMLElement & HTMLTemplateElement;

type Event = { [key: string]: Callback };

const enum EVENTS {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_RENDER = 'flow:component-render',
  FLOW_CDU = 'flow:component-did-update',
}

class Block {
  public props: Props;

  public children: Props;

  private readonly _id: string;

  private readonly _eventBus: () => EventBus;

  private readonly _meta: Meta;

  private readonly oldProps: Props;

  constructor(tagName = 'div', propsAndChildren = {}) {
    const eventBus = new EventBus();

    this._meta = {
      tagName,
      propsAndChildren,
    };

    this._id = v4();
    const { props, children } = this._detectChildren(propsAndChildren);
    this.children = children;
    this.oldProps = {};
    this._eventBus = () => eventBus;
    this.props = this._makePropsProxy(
      { ...props, id: this._id },
      this._eventBus,
    ) as Props;
    this._registerEvents();
    this.emit(EVENTS.INIT);
  }

  private _element?: HTMLElement;

  public get element() {
    return this._element;
  }

  public setProps = (nextProps: object) => {
    Object.assign(this.oldProps, this.props);

    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
    this._eventBus().emit(EVENTS.FLOW_CDU, this.oldProps, this.props);
  };

  public componentDidUpdate(oldProps: Props, newProps: Props) {
    console.log('didUpdate', 'oldProps', oldProps, 'newProps', newProps);
    return true;
  }

  public compile(template: string, props: Props) {
    const propsAndStubs = { ...props };
    for (const [key, child] of Object.entries(this.children)) {
      propsAndStubs[key] = isArray(child)
        ? child.map((item: Block) => `<div data-id="${item._id}"></div>`)
        : `<div data-id="${child._id}"></div>`;
    }

    const fragment = this._createDocumentElement('template');
    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

    const fillStub = (child: Block) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      if (!stub) {
        throw new Error(`${child._id} stub is empty`);
      }
      stub.replaceWith(child.getContent());
    };

    for (const [, child] of Object.entries(this.children)) {
      if (isArray(child)) {
        for (const item of child) {
          fillStub(item);
        }
      } else {
        fillStub(child);
      }
    }

    return fragment.content;
  }

  public emit(event: EVENTS) {
    this._eventBus().emit(event);
  }

  public dispatchComponentDidMount() {
    this._eventBus().emit(EVENTS.FLOW_CDM);
    for (const child of Object.values(this.children))
      if (this._isArrayOfComponents(child)) {
        for (const item of child) item.dispatchComponentDidMount();
      } else {
        child.dispatchComponentDidMount();
      }
  }

  public getContent() {
    if (!this.element) {
      throw new Error('not initialized');
    }
    return this.element;
  }

  public init() {
    console.log('init');
    this._createResources();
    this.emit(EVENTS.FLOW_RENDER);
  }

  public componentDidMount() {
    console.log('didMount');
  }

  public render(): DocumentFragment | void {
    console.log('render');
  }

  public show() {
    this.getContent().style.display = 'block';
  }

  public hide() {
    this.getContent().style.display = 'none';
  }

  public renewAttributes(attr: Props) {
    if (!this._element) {
      throw new Error('element not found');
    }
    for (const [key, value] of Object.entries(attr)) {
      this._element.setAttribute(key, value);
    }
  }

  private _addEvents() {
    const { events = {} as Event } = this.props;
    for (const eventName of Object.keys(events)) {
      if (!this._element) {
        throw new Error('There is no element');
      }
      this._element.addEventListener(eventName, events[eventName]);
    }
  }

  private _removeEvents() {
    const { events = {} as Event } = this.props;
    const { oldEvents = {} as Event } = this.oldProps.events || {};

    for (const eventName of Object.keys(events)) {
      if (!this._element) {
        throw new Error('There is no element');
      }
      this._element.removeEventListener(eventName, events[eventName]);
    }
    for (const eventName of Object.keys(oldEvents)) {
      if (!this._element) {
        throw new Error('There is no element');
      }
      this._element.removeEventListener(eventName, events[eventName]);
    }
  }

  private _isArrayOfComponents(value: Props[]) {
    return isArray(value)
      ? value.every((item: Props) => item instanceof Block)
      : false;
  }

  private _detectChildren(propsAndChildren: Props) {
    const children: Props = {};
    const props: Props = {};
    for (const [key, value] of Object.entries(propsAndChildren)) {
      if (this._isArrayOfComponents(value) || value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    }
    return { children, props };
  }

  private _registerEvents() {
    this._eventBus().on(EVENTS.INIT, this.init.bind(this));
    this._eventBus().on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this._eventBus().on(EVENTS.FLOW_RENDER, this._render.bind(this));
    this._eventBus().on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  private _makePropsProxy(props: object, eventBus: () => EventBus) {
    return new Proxy(props, {
      set(target: { [key: string]: unknown }, prop: string, newValue) {
        const oldValue = target[prop];
        if (oldValue === newValue) {
          return true;
        }
        target[prop] = newValue;
        eventBus().emit(EVENTS.FLOW_RENDER);
        return true;
      },
    });
  }

  private _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
    this._element.dataset.id = this._id;
  }

  private _createDocumentElement(tagName: string): DocumentElement {
    return document.createElement(tagName) as DocumentElement;
  }

  private _render() {
    const block = this.render();

    if (!this._element) {
      throw new Error('not initialized');
    }
    this._removeEvents();
    this._element.innerHTML = '';
    this._element.append(block as Node);
  }

  private _componentDidMount() {
    this._addEvents();
    this.componentDidMount();
  }

  private _componentDidUpdate(oldProps: Props, newProps: Props) {
    const isReRender = this.componentDidUpdate(oldProps, newProps);
    if (isReRender) {
      this._eventBus().emit(EVENTS.FLOW_RENDER);
    }
    this._addEvents();
  }
}

export default Block;
