import Block from '../../utils/Block';
import { Props } from '../../types/props';
import template from './UserForm.template';
import userFormStyles from './UserForm.module.css';

class UserForm extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      class: userFormStyles.container,
    };
    this.renewAttributes(attr);
  }
}

export default UserForm;
