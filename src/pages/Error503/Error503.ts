import Block from '../../abstracts/Block';
import template from './Error503.template';
import { Props } from '../../types/props';
import Error from '../../components/Error';
import Link from '../../components/Link';
import error503styles from './Error503.module.css';
import { props as globalProps } from '../../const/props';

class Error404 extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      class: error503styles.container,
    };
    this.renewAttributes(attr);
  }
}

const error = new Error(globalProps.error503.error);
const link = new Link(globalProps.error503.link);
export default new Error404({
  styles: globalProps.error503.styles,
  Error: error,
  Link: link,
});
