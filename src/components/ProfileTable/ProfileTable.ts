import Block from '../../utils/Block';
import template from './ProfileTable.template';
import { Props } from '../../types/props';
import profileTableStyles from './ProfileTable.module.css';

class ProfileTable extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      class: profileTableStyles.container,
    };
    this.renewAttributes(attr);
  }
}

export default ProfileTable;
