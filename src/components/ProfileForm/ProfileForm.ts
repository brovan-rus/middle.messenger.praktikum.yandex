import template from './ProfileForm.template';
import profileFormStyles from './ProfileForm.module.css';
import Form from '../../utils/Form';

class ProfileForm extends Form {
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
