import Block from '../../utils/Block';
import template from './ChatInput.template';
import { Props } from '../../types/props';
import chatInputStyles from './ChatInput.module.css';

class ChatInput extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      id: 'searchForm',
      class: chatInputStyles.searchForm,
    };
    this.renewAttributes(attr);
  }
}

export default ChatInput;
