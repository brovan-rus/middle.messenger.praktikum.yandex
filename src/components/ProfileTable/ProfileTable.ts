import Block from '../../utils/Block';
import template from './ProfileTable.template';
import { Props } from '../../types/props';
import profileTableStyles from './ProfileTable.module.css';
import ProfileField from '../ProfileField/ProfileField';

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

  componentDidUpdate(_oldProps: Props, newProps: Props): boolean {
    for (const field of newProps.fields) {
      const currentChild = this.children.fields?.find((child: ProfileField) => {
        return child.props.name === field.name;
      });
      currentChild?.setProps(field);
    }
    return true;
  }
}

export default ProfileTable;
