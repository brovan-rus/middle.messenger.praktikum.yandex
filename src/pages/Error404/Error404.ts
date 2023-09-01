import Block from '../../abstracts/Block';
import template from './Error404.template';
import { Props } from '../../types/props';
import Error from '../../components/Error';
import Link from '../../components/Link';
import error404Styles from './Error404.module.css';
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
      class: error404Styles.container,
    };
    this.renewAttributes(attr);
  }
}

const error = new Error(globalProps.error404.error);
const link = new Link(globalProps.error404.link);
export default new Error404({
  styles: globalProps.error404.styles,
  Error: error,
  Link: link,
});
