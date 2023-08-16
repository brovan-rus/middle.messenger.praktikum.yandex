import Block from '../../utils/Block';
import template from './UserModal.template';
import { Props } from '../../types/props';
import styles from './UserModal.module.css';

class UserModal extends Block {
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

export default UserModal;
