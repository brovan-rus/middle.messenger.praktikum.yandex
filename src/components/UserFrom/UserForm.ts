import Form from '../abstract/Form/Form';
import template from './UserForm.template';
import userFormStyles from './UserForm.module.css';
import { Indexed } from '../../types/Indexed';

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

  async submit(data: Indexed) {
    await this.props.submit(data);
  }
}

export default UserForm;
