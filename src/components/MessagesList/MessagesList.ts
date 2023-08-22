import Block from '../../utils/Block';
import template from './MessagesList.template';
import { Props } from '../../types/props';
import styles from './MessagesList.module.css';
import { assertIsDefined } from '../../utils/assertIsDefined';

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
    this.scrollToBottom();
  }

  scrollToBottom() {
    // setTimeout to be sure that code will run after element mounted to DOM
    setTimeout(() => {
      assertIsDefined(this.element);
      this.element.scrollTop = this.element.scrollHeight;
    });
  }

  componentDidUpdate(_oldProps: Props, _newProps: Props): boolean {
    this.scrollToBottom();
    return true;
  }
}

export default MessagesList;
