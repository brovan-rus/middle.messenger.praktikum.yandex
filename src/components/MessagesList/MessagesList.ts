import Block from '../../utils/Block';
import template from './MessagesList.template';
import { Props } from '../../types/props';
import styles from './MessagesList.module.css';

class MessagesList extends Block {
  constructor(props: Props) {
    super('ul', props);
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

export default MessagesList;
