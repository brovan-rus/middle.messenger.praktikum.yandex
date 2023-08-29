import Block from '../../abstracts/Block';
import template from './EditProfile.template';
import { Props } from '../../types/props';
import editProfileStyles from './EditProfile.module.css';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button/Button';
import { props as globalProps } from '../../const/props';
import ProfileTable from '../../components/ProfileTable';
import ProfileForm from '../../components/ProfileForm';
import FormInput from '../../components/FormInput';

class EditProfile extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      class: editProfileStyles.container,
    };
    this.renewAttributes(attr);
  }
}

const { editProfile } = globalProps;
const { profileForm: profileFormProps } = editProfile.profileTable;

if (!profileFormProps) {
  throw new Error('Profile form props is not defined');
}

const backButton = new BackButton({
  Button: new Button(editProfile.backButton.button),
  styles: editProfile.backButton.styles,
});

const { fields, button } = profileFormProps;

const profileForm = new ProfileForm({
  ...profileFormProps,
  fields: fields.map((field: Props) => new FormInput(field)),
  Button: new Button({
    ...button,
  }),
});

const profileTable = new ProfileTable({
  ...editProfile.profileTable,
  ProfileForm: profileForm,
});

export default new EditProfile({
  BackButton: backButton,
  ProfileTable: profileTable,
});
