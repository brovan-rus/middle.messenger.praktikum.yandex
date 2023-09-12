import Block from '../../abstracts/Block';
import template from './Placeholder.template';
import { Props } from '../../types/props';
import placeholder from './Placeholder.module.css';

class Placeholder extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      class: placeholder.container,
    };
    this.renewAttributes(attr);
  }
}

export default Placeholder;
