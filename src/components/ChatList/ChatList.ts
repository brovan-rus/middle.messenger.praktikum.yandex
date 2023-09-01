import Block from '../../abstracts/Block';
import template from './ChatList.template';
import { Props } from '../../types/props';
import chatListStyles from './ChatList.module.css';

class ChatList extends Block {
  constructor(props: Props) {
    super('section', props);
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      class: chatListStyles.container,
    };
    this.renewAttributes(attr);
  }
}

export default ChatList;
