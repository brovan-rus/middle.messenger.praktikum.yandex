import Block from '../../utils/Block';
import { Props } from '../../types/props';
import template from './Register.template';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button/Button';
import UserForm from '../../components/UserFrom';
import Link from '../../components/Link';
import error404Styles from '../Error404/Error404.module.css';
import { props as globalProps } from '../../const/props';

class Register extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      class: error404Styles.container,
    };
    this.renewAttributes(attr);
  }
}

const { userForm, styles: loginStyles } = globalProps.register;
const {
  button,
  link,
  styles: formStyles,
  fields,
  title: userFormTitle,
} = userForm;

const buttonComponent = new Button(button);
const linkComponent = new Link(link);
const userFormComponent = new UserForm({
  title: userFormTitle,
  styles: formStyles,
  fields: fields.map(
    inputProps => new FormInput({ ...inputProps, userForm: true }),
  ),
  Button: buttonComponent,
  Link: linkComponent,
});

export default new Register({
  styles: loginStyles,
  UserForm: userFormComponent,
});
