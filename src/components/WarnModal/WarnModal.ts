import Block from '../../utils/Block';
import template from './WarnModal.temlate';
import { Props } from '../../types/props';
import styles from './WarnModal.module.css';

class WarnModal extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      class: styles.container,
    };
    this.renewAttributes(attr);
  }
}

export default WarnModal;
