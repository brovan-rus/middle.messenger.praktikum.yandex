import userFormStyles from '../components/UserFrom/UserForm.module.css';
import { FormInputProps } from '../mocks/userForm';
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
import { ButtonType } from '../components/Button/Button';
import { Message } from '../mocks/messages';

export type ButtonContext = {
  styles: typeof buttonStyles;
  backButton?: boolean;
  sendButton?: boolean;
  text?: string;
  type?: ButtonType;
};

export type BackButtonContext = {
  styles: typeof backButtonStyles;
  button: ButtonContext;
};

type UserFormContext = {
  styles: typeof userFormStyles;
  title: string;
  button: ButtonContext;
  link: LinkContext;
  fields: FormInputProps[];
  submit?: (data: never) => Promise<unknown>;
};

type LinkContext = {
  styles: typeof linkStyles;
  text: string;
  size: string;
  color?: string;
  events?: Record<string, () => void>;
};

type PlaceholderContext = {
  text: string;
  styles: typeof placeholderStyles;
};

type ChatListContext = {
  styles: typeof chatListStyles;
  profileLinkText: string;
  chatInput: ChatInputContext;
  cards: Card[];
  events?: Record<string, (e: Event) => void>;
};

type ChatInputContext = {
  styles: typeof chatInputStyles;
  searchBar: boolean;
  placeholder?: string;
  name: string;
};

type ProfileFormContext = {
  styles: typeof profileFormStyles;
  fields: ProfileInfo[];
  button: ButtonContext;
};

type ProfileTableContext = {
  styles: typeof profileTableStyles;
  fields?: ProfileInfo[];
  links?: ProfileLink[];
  form: boolean;
  profileForm?: ProfileFormContext;
};

type ErrorContext = {
  styles: typeof errorStyles;
  code: string;
  description: string;
};

export type ProfileContext = {
  styles: typeof profileStyles;
  backButton: BackButtonContext;
  profileTable: ProfileTableContext;
};

export type EditProfileContext = {
  styles: typeof editProfileStyles;
  backButton: BackButtonContext;
  profileTable: ProfileTableContext;
};

export type Error404Context = {
  styles: typeof error404Styles;
  error: ErrorContext;
  link: LinkContext;
};

export type Error503Context = {
  styles: typeof error503Styles;
  error: ErrorContext;
  link: LinkContext;
};

export type EditPasswordContext = {
  styles: typeof editPasswordStyles;
  backButton: BackButtonContext;
  profileTable: ProfileTableContext;
};

export type ChatContext = {
  styles: typeof chatStyles;
  chatSelected: boolean;
  chatTape: {
    chatName: string;
    styles: typeof chatTapeStyles;
    chatInput: ChatInputContext;
    button: ButtonContext;
    messages: Message[];
  };
  placeholder: PlaceholderContext;
  chatList: ChatListContext;
};

export type LoginContext = {
  styles: typeof loginStyles;
  userForm: UserFormContext;
};

export type RegisterContext = {
  styles: typeof registerStyles;
  userForm: UserFormContext;
};
