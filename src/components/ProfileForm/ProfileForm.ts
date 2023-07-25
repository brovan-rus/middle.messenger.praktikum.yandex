import Block from '../../utils/Block';
import template from './ProfileForm.template';
import { Props } from '../../types/props';
import profileFormStyles from './ProfileForm.module.css';

class ProfileForm extends Block {
  constructor(props: Props) {
    super('form', props);
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      id: 'profileEditForm',
      class: profileFormStyles.form,
    };
    this.renewAttributes(attr);
  }
}

export default ProfileForm;
