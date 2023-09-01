import { Props } from '../../src/types/props';
import Block from '../../src/abstracts/Block';

const makeComponent = (
  tagName: string,
  props: Props,
  template: string,
  onUpdate: () => boolean = () => {
    return true;
  },
) => {
  return new (class extends Block {
    constructor() {
      super(tagName, props);
    }

    render() {
      return this.compile(template, this.props);
    }

    componentDidUpdate(_oldProps: Props, _newProps: Props): boolean {
      return onUpdate();
    }
  })();
};

export default makeComponent;
