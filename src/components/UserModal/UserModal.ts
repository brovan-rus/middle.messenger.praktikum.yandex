import Block from '../../abstracts/Block';
import template from './UserModal.template';
import { Props } from '../../types/props';
import styles from './UserModal.module.css';
import Button, { ButtonType } from '../Button/Button';
import FormInput from '../FormInput';
import formInputStyles from '../FormInput/FormInput.module.css';

class UserModal extends Block {
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

export const userModal = (props: Props) =>
  new UserModal({
    title: props.title,
    Button: new Button({
      type: ButtonType.FORM_BUTTON,
      text: props.buttonText,
    }),
    FormInput: new FormInput({
      inputName: props.inputName,
      fieldValue: '',
      fieldName: props.fieldTitle,
      styles: formInputStyles,
      type: props.inputType ?? 'text',
      userForm: true,
    }),
    events: {
      submit: props.submit,
    },
    styles: props.styles,
  });
