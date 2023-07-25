import Block from '../../utils/Block';
import template from './ChatTape.template';
import { Props } from '../../types/props';
import chatTapeStyles from './ChatTape.module.css';

class ChatTape extends Block {
  constructor(props: Props) {
    super('section', props);
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      class: chatTapeStyles.container,
    };
    this.renewAttributes(attr);
  }
}

export default ChatTape;
