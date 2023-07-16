import userFormStyles from '../components/UserFrom/UserForm.module.css';
import { FormInputProps } from '../mocks/userForm';
import type { Template } from './template';
import buttonStyles from '../components/Button/Button.module.css';
import backButtonStyles from '../components/BackButton/BackButton.module.css';
import linkStyles from '../components/Link/Link.module.css';
import loginStyles from '../pages/Login/Login.module.css';
import registerStyles from '../pages/Register/Register.module.css';
import placeholderStyles from '../components/Placeholder/Placeholder.module.css';
import chatInputStyles from '../components/ChatInput/ChatInput.module.css';
import chatListStyles from '../components/ChatList/ChatList.module.css';
import { Card } from '../mocks/cards';
import chatStyles from '../pages/Chat/Chat.module.css';
import profileTableStyles from '../components/ProfileTable/ProfileTable.module.css';
import { ProfileInfo } from '../mocks/profile';
import { ProfileLink } from '../mocks/profileLinks';
import profileFormStyles from '../components/ProfileForm/ProfileForm.module.css';
import editProfileStyles from '../pages/EditProfile/EditProfile.module.css';
import profileStyles from '../pages/Profile/Profile.module.css';
import editPasswordStyles from '../pages/EidtPassword/EditPassword.module.css';
import errorStyles from '../components/Error/Error.module.css';
import error404Styles from '../pages/Error404/Error404.module.css';
import error503Styles from '../pages/Error404/Error503.module.css';
import chatTapeStyles from '../components/ChatTape/ChatTape.module.css';

type ButtonTemplate = Template;
type LinkTemplate = Template;

export type ButtonContext = {
  styles: typeof buttonStyles;
  backButton?: boolean;
  sendButton?: boolean;
  id: string;
  text?: string;
  formButton?: boolean;
};

export type ButtonTemplateContext = {
  styles: typeof backButtonStyles;
  Button: ButtonTemplate;
};

type UserFormContext = {
  styles: typeof userFormStyles;
  title: string;
  fields: FormInputProps[];
  Button: ButtonTemplate;
  Link: LinkTemplate;
};

type LinkContext = {
  text: string;
  styles: typeof linkStyles;
  small: boolean;
  id: string;
};

type PlaceholderContext = {
  text: string;
  styles: typeof placeholderStyles;
};

type ChatInputContext = {
  styles: typeof chatInputStyles;
  searchBar: boolean;
  placeholder: string;
};

type ChatTapeContext = {
  styles: typeof chatTapeStyles;
};

type ChatListContext = {
  styles: typeof chatListStyles;
  profileLinkText: string;
  chatInput: HandlebarsTemplateDelegate<ChatInputContext>;
  cards: Card[];
};

type EditProfileFormContext = {
  styles: typeof profileFormStyles;
  fields: ProfileInfo;
  Button: HandlebarsTemplateDelegate<ButtonContext>;
};

type ProfileTableContext = {
  styles: typeof profileTableStyles;
  fields?: ProfileInfo[];
  links?: ProfileLink[];
  form: boolean;
  EditProfileForm?: HandlebarsTemplateDelegate<EditProfileFormContext>;
};

type ErrorContext = {
  styles: typeof errorStyles;
  code: string;
  description: string;
};

export type ProfileContext = {
  styles: typeof profileStyles;
  BackButton: HandlebarsTemplateDelegate<ButtonContext> | Template;
  ProfileTable: HandlebarsTemplateDelegate<ProfileTableContext> | Template;
};

export type EditProfileContext = {
  styles: typeof editProfileStyles;
  BackButton: HandlebarsTemplateDelegate<ButtonContext> | Template;
  ProfileTable: HandlebarsTemplateDelegate<ProfileTableContext> | Template;
};

export type Error404Context = {
  styles: typeof error404Styles;
  Error: HandlebarsTemplateDelegate<ErrorContext> | Template;
  Link: HandlebarsTemplateDelegate<LinkContext> | Template;
};

export type Error503Context = {
  styles: typeof error503Styles;
  Error: HandlebarsTemplateDelegate<ErrorContext> | Template;
  Link: HandlebarsTemplateDelegate<LinkContext> | Template;
};

export type EditPasswordContext = {
  styles: typeof editPasswordStyles;
  BackButton: HandlebarsTemplateDelegate<ButtonContext> | Template;
  ProfileTable: HandlebarsTemplateDelegate<ProfileTableContext> | Template;
};

export type ChatContext = {
  styles: typeof chatStyles;
  chatSelected: boolean;
  ChatTape: HandlebarsTemplateDelegate<ChatTapeContext> | Template;
  Placeholder: HandlebarsTemplateDelegate<PlaceholderContext> | Template;
  ChatList: HandlebarsTemplateDelegate<ChatListContext> | Template;
};

export type LoginContext = {
  styles: typeof loginStyles;
  UserForm: HandlebarsTemplateDelegate<UserFormContext> | Template;
  Link?: HandlebarsTemplateDelegate<LinkContext> | Template;
};

export type RegisterContext = {
  styles: typeof registerStyles;
  UserForm: HandlebarsTemplateDelegate<UserFormContext> | Template;
  Link?: HandlebarsTemplateDelegate<LinkContext> | Template;
};

export type PageContext =
  | LoginContext
  | ProfileContext
  | RegisterContext
  | ChatContext
  | EditPasswordContext
  | EditProfileContext
  | Error404Context
  | Error503Context;
