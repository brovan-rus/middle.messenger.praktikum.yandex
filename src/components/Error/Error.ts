import Block from '../../utils/Block';
import template from './Error.template';
import { Props } from '../../types/props';
import errorStyles from './Error.module.css';

class Error extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      id: 'error',
      class: errorStyles.container,
    };
    this.renewAttributes(attr);
  }
}

export default Error;
