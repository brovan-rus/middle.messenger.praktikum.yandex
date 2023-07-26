import Block from '../../utils/Block';
import { Props } from '../../types/props';
import template from './UserForm.template';
import userFormStyles from './UserForm.module.css';
import { assertIsDefined } from '../../utils/assertIsDefined';
import { addValidationEvents } from '../../utils/addValidationEvents';

class UserForm extends Block {
  constructor(props: Props) {
    super('form', props);
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
      class: userFormStyles.container,
      novalidate: true,
    };
    this.renewAttributes(attr);
  }
}

export default UserForm;
