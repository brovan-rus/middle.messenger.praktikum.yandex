import Block from '../../abstracts/Block/Block';
import template from './Profile.template';
import { Props } from '../../types/props';
import profileStyles from './Profile.module.css';
import { props as globalProps } from '../../const/props';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton';
import ProfileTable from '../../components/ProfileTable';
import ProfileField from '../../components/ProfileField/ProfileField';
import Link from '../../components/Link';

export class Profile extends Block {
  constructor(props: Props) {
    super('sting', props);
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      class: profileStyles.container,
    };
    this.renewAttributes(attr);
  }
}

const backButton = new BackButton({
  Button: new Button(globalProps.profile.backButton.button),
  styles: globalProps.profile.backButton.styles,
});

const { fields, links } = globalProps.profile.profileTable;

const profileTable = new ProfileTable(
  {
    ...globalProps.profile.profileTable,
    fields: fields?.map(field => new ProfileField(field)),
    links: links?.map(link => new Link(link)),
  },
  'div',
);

export default new Profile({
  BackButton: backButton,
  ProfileTable: profileTable,
});
