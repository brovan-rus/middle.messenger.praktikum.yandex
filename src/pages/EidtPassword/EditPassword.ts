import Block from '../../utils/Block';
import template from './EditPassword.template';
import { Props } from '../../types/props';
import editPasswordStyles from './EditPassword.module.css';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button/Button';
import { props as globalProps } from '../../const/props';
import ProfileTable from '../../components/ProfileTable';
import ProfileForm from '../../components/ProfileForm';
import FormInput from '../../components/FormInput';

class EditPassword extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      class: editPasswordStyles.container,
    };
    this.renewAttributes(attr);
  }
}

const { editPassword } = globalProps;
const { profileForm: profileFormProps } = editPassword.profileTable;

if (!profileFormProps) {
  throw new Error('Profile form props is not defined');
}

const backButton = new BackButton({
  Button: new Button(editPassword.backButton.button),
  styles: editPassword.backButton.styles,
});

const { fields, button } = profileFormProps;

const profileForm = new ProfileForm({
  ...profileFormProps,
  fields: fields.map((field: Props) => new FormInput(field)),
  Button: new Button(button),
});

const profileTable = new ProfileTable({
  ...editPassword.profileTable,
  ProfileForm: profileForm,
});

export default new EditPassword({
  BackButton: backButton,
  ProfileTable: profileTable,
});
