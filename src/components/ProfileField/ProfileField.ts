import Block from '../../utils/Block';
import template from './ProfileField.template';
import { Props } from '../../types/props';
import profileFieldStyles from './ProfileField.module.css';

class ProfileField extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      class: profileFieldStyles.container,
    };
    this.renewAttributes(attr);
  }
}

export default ProfileField;
