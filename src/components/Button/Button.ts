import Block from '../../abstracts/Block';
import template from './Button.template';
import { Props } from '../../types/props';
import buttonStyles from './Button.module.css';

export const enum ButtonType {
  BACK_BUTTON = 'back_button',
  SEND_BUTTON = 'send_button',
  FORM_BUTTON = 'form_button',
}

class Button extends Block {
  constructor(props: Props) {
    super('button', props);
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    this.renewAttributes(this.getAttr(this.props));
  }

  getAttr(props: Props) {
    return {
      class: `
          ${buttonStyles.button}
          ${
            props.type === ButtonType.BACK_BUTTON ? buttonStyles.backButton : ''
          }
          ${
            props.type === ButtonType.SEND_BUTTON ? buttonStyles.sendButton : ''
          }
          ${
            props.type === ButtonType.FORM_BUTTON ? buttonStyles.formButton : ''
          }`,
      type: `${
        props.type === ButtonType.FORM_BUTTON ||
        props.type === ButtonType.SEND_BUTTON
          ? 'submit'
          : 'button'
      }`,
    };
  }

  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    const attrRenewed =
      oldProps.size !== newProps.size || oldProps.color !== newProps.color;
    if (attrRenewed) {
      this.renewAttributes(this.getAttr(newProps));
    }
    return true;
  }
}

export default Button;
