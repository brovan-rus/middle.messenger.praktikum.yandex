import Block from '../../abstracts/Block';
import { Props } from '../../types/props';
import template from './FormInput.template';
import formInputStyles from './FormInput.module.css';

class FormInput extends Block {
  constructor(props: Props) {
    super('div', props);

    this.props.placeholder = this.props.fieldValue;

    this.props.events = {
      ...this.props.events,
    };
  }

  getAttr(props: Props) {
    return {
      class: `
          ${formInputStyles.container}
          ${props.userForm ? formInputStyles.containerUserFrom : ''}`,
    };
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = this.getAttr(this.props);
    this.renewAttributes(attr);
  }

  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    const attrRenewed = oldProps.userForm === newProps.userForm;
    if (attrRenewed) {
      const attr = this.getAttr(this.props);
      this.renewAttributes(attr);
    }
    return true;
  }
}

export default FormInput;
