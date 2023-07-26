import Block from '../../utils/Block';
import template from './ChatTape.template';
import { Props } from '../../types/props';
import chatTapeStyles from './ChatTape.module.css';
import { assertIsDefined } from '../../utils/assertIsDefined';
import { addValidationEvents } from '../../utils/addValidationEvents';

class ChatTape extends Block {
  constructor(props: Props) {
    super('section', props);
    assertIsDefined(this.element);
    const validationEvents = addValidationEvents(this.element);
    this.props.events = {
      ...this.props.events,
      ...validationEvents,
    };
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
