import template from './ProfileForm.template';
import profileFormStyles from './ProfileForm.module.css';
import Form from '../abstract/Form/Form';
import { Props } from '../../types/props';
import ProfileField from '../ProfileField/ProfileField';
import fromInputStyles from '../FormInput/FormInput.module.css';
import { Indexed } from '../../types/Indexed';

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

  async submit(data: Indexed) {
    await this.props.submit(data, this.getContent());
  }

  componentDidUpdate(_oldProps: Props, newProps: Props): boolean {
    for (const field of newProps.fields) {
      const currentChild = this.children.fields?.find((child: ProfileField) => {
        return child.props.name === field.name;
      });
      currentChild?.setProps({ ...field, styles: fromInputStyles });
    }
    console.log(newProps);
    return true;
  }
}

export default ProfileForm;
