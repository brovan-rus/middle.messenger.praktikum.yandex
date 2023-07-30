import Block from '../../utils/Block';
import template from './ChatTape.template';
import { Props } from '../../types/props';
import chatTapeStyles from './ChatTape.module.css';
import { assertIsDefined } from '../../utils/assertIsDefined';
import { addValidationEvents } from '../../utils/addValidationEvents';
import { ValidationData } from '../../utils/validate';
import { FormData } from '../../types/formData';

class ChatTape extends Block {
  constructor(props: Props) {
    super('section', props);
    assertIsDefined(this.element);
    const validationEvents = addValidationEvents(
      this.element,
      this.showValidation.bind(this),
    );
    console.log(this.children);
    this.props.events = {
      ...this.props.events,
      ...validationEvents,
    };
  }

  showValidation(validationData: ValidationData, formData: FormData) {
    const chatInput = this.children.ChatInput;
    if (validationData.message) {
      chatInput.setProps({
        ...chatInput.props,
        validationError: validationData.message,
        value: formData.message,
      });
    } else {
      chatInput.setProps({
        ...chatInput.props,
        validationError: '',
        value: formData.message,
      });
    }
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
