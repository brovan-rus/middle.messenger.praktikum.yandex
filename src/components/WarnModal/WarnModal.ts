import Block from '../../utils/Block';
import template from './WarnModal.temlate';
import { Props } from '../../types/props';
import styles from './WarnModal.module.css';
import Button, { ButtonType } from '../Button/Button';

class WarnModal extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      class: styles.container,
    };
    this.renewAttributes(attr);
  }
}

export const warnModal = (props: Props) =>
  new WarnModal({
    title: props.title,
    text: props.text,
    Button: new Button({
      type: ButtonType.FORM_BUTTON,
      text: props.buttonText,
    }),
    events: {
      submit: props.submit,
    },
    styles: props.styles,
  });
