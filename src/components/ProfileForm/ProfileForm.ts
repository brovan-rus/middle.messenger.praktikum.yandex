import Block from '../../utils/Block';
import template from './ProfileForm.template';
import { Props } from '../../types/props';
import profileFormStyles from './ProfileForm.module.css';
import { addValidationEvents } from '../../utils/addValidationEvents';
import { assertIsDefined } from '../../utils/assertIsDefined';

class ProfileForm extends Block {
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
      class: profileFormStyles.form,
      novalidate: true,
    };
    this.renewAttributes(attr);
  }
}

export default ProfileForm;
