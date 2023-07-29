import Form from '../../utils/Form';
import template from './UserForm.template';
import userFormStyles from './UserForm.module.css';

class UserForm extends Form {
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
