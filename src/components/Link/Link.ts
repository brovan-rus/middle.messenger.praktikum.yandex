import Block from '../../abstracts/Block';
import template from './Link.template';
import { Props } from '../../types/props';
import linkStyles from './Link.module.css';

const enum Sizes {
  SMALL = 'small',
  NORMAL = 'normal',
}

const enum Color {
  BLUE = 'blue',
  RED = 'red',
}

class Link extends Block {
  constructor(props: Props) {
    super('a', props);
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    this.renewAttributes(this.getAttr(this.props));
  }

  getAttr(props: Props) {
    return {
      class: `
          ${linkStyles.link}
          ${props.size === Sizes.SMALL ? linkStyles.small : ''}
          ${props.color === Color.RED ? linkStyles.red : ''}`,
      href: '',
    };
  }

  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    const attrRenewed =
      oldProps.size !== newProps.size || oldProps.color !== newProps.color;
    if (attrRenewed) {
      this.renewAttributes(this.getAttr(newProps));
    }
    return true;
  }
}

export default Link;
