import Handlebars from 'handlebars';
import { cards } from '../mocks/cards';
import { messages } from '../mocks/messages';
import {
  profile,
  profileInputs,
  profilePasswordInputs,
} from '../mocks/profile';
import { profileLinks } from '../mocks/profileLinks';
import { loginInputs, registerInputs } from '../mocks/userForm';
import loginStyles from '../pages/Login/Login.module.css';
import chatStyles from '../pages/Chat/Chat.module.css';
import Placeholder from '../components/Placeholder/Placeholder.template';
import PlaceholderStyles from '../components/Placeholder/Placeholder.module.css';
import ChatTape from '../components/ChatTape/ChatTape.template';
import chatTapeStyles from '../components/ChatTape/ChatTape.module.css';
import ChatList from '../components/ChatList/ChatList.template';
import chatListStyles from '../components/ChatList/ChatList.module.css';
import ChatInput from '../components/ChatInput/ChatInput.template';
import ChatInputStyles from '../components/ChatInput/ChatInput.module.css';
import ChatCard from '../components/ChatCard/ChatCard.template';
import profileStyles from '../pages/Profile/Profile.module.css';
import BackButton from '../components/BackButton/BackButton.template';
import backButtonStyles from '../components/BackButton/BackButton.module.css';
import Button from '../components/Button/Button.template';
import buttonStyles from '../components/Button/Button.module.css';
import ProfileTable from '../components/ProfileTable/ProfileTable.template';

import profileTableStyles from '../components/ProfileTable/ProfileTable.module.css';
import ProfileFiled from '../components/ProfileField/ProfileField.template';
import Link from '../components/Link/Link.template';
import linkStyles from '../components/Link/Link.module.css';
import editProfileStyles from '../pages/EditProfile/EditProfile.module.css';
import ProfileForm from '../components/ProfileForm/ProfileForm.template';
import editProfileFormStyles from '../components/ProfileForm/ProfileForm.module.css';
import FormInput from '../components/FormInput/FormInput.template';
import editPasswordStyles from '../pages/EidtPassword/EditPassword.module.css';
import UserForm from '../components/UserFrom/UserForm.template';
import userFormStyles from '../components/UserFrom/UserForm.module.css';
import registerStyles from '../pages/Register/Register.module.css';
import error404Styles from '../pages/Error404/Error404.module.css';
import error503Styles from '../pages/Error503/Error503.module.css';
import Error from '../components/Error/Error.template';
import ErrorStyles from '../components/Error/Error.module.css';
import Message from '../components/Message/Message.template';

import {
  ButtonContext,
  ButtonTemplateContext,
  ChatContext,
  EditPasswordContext,
  EditProfileContext,
  Error404Context,
  Error503Context,
  ProfileContext,
  LoginContext,
  RegisterContext,
} from '../types/contexts';

const placeholderTemplate = Handlebars.compile(Placeholder);
const chatListTemplate = Handlebars.compile(ChatList);
const chatInputTemplate = Handlebars.compile(ChatInput);
const chatCardTemplate = Handlebars.compile(ChatCard);

const backButtonTemplate: HandlebarsTemplateDelegate<ButtonTemplateContext> =
  Handlebars.compile(BackButton);
const buttonTemplate: HandlebarsTemplateDelegate<ButtonContext> =
  Handlebars.compile(Button);
const profileTableTemplate = Handlebars.compile(ProfileTable);
const profileFieldTemplate = Handlebars.compile(ProfileFiled);
const linkTemplate = Handlebars.compile(Link);
const profileFormTemplate = Handlebars.compile(ProfileForm);
const formInputTemplate = Handlebars.compile(FormInput);
const userFromTemplate = Handlebars.compile(UserForm);
const error = Handlebars.compile(Error);
const chatTapeTemplate = Handlebars.compile(ChatTape);
const messageTemplate = Handlebars.compile(Message);

Handlebars.registerPartial('card', chatCardTemplate);
Handlebars.registerPartial('profileField', profileFieldTemplate);
Handlebars.registerPartial('link', linkTemplate);
Handlebars.registerPartial('formInput', formInputTemplate);
Handlebars.registerPartial('message', messageTemplate);

const profileBackButtonProps: ButtonTemplateContext = {
  styles: backButtonStyles,
  Button: buttonTemplate({
    styles: buttonStyles,
    backButton: true,
    id: 'backButton',
  }),
};

const formButtonProps = ({
  id,
  text = 'Сохранить',
}: {
  id: string;
  text?: string;
}): ButtonContext => {
  return {
    styles: buttonStyles,
    formButton: true,
    id,
    text,
  };
};

type Props = {
  login: LoginContext;
  register: RegisterContext;
  chat: ChatContext;
  profile: ProfileContext;
  editProfile: EditProfileContext;
  editPassword: EditPasswordContext;
  error404: Error404Context;
  error503: Error503Context;
};

export const props: Props = {
  login: {
    styles: loginStyles,
    UserForm: userFromTemplate({
      styles: userFormStyles,
      title: 'Вход',
      fields: loginInputs,
      Button: buttonTemplate(
        formButtonProps({ id: 'formButtonLogin', text: 'Авторизоваться' }),
      ),
      Link: linkTemplate({
        text: 'Нет аккаунта?',
        styles: linkStyles,
        small: true,
        id: 'register',
      }),
    }),
  },
  register: {
    styles: registerStyles,
    UserForm: userFromTemplate({
      styles: userFormStyles,
      title: 'Регистрация',
      fields: registerInputs,
      Button: buttonTemplate(
        formButtonProps({
          id: 'formButtonRegister',
          text: 'Зарегистрироваться',
        }),
      ),
      Link: linkTemplate({
        text: 'Войти?',
        styles: linkStyles,
        small: true,
        id: 'login',
      }),
    }),
  },
  chat: {
    styles: chatStyles,
    chatSelected: true,
    Placeholder: placeholderTemplate({
      text: 'Выберите чат чтобы отправить сообщение',
      styles: PlaceholderStyles,
    }),
    ChatTape: chatTapeTemplate({
      chatName: 'Виктор',
      ChatInput: chatInputTemplate({
        styles: ChatInputStyles,
        searchBar: false,
        name: 'message',
      }),
      Button: buttonTemplate({
        id: 'sendButton',
        styles: buttonStyles,
        sendButton: true,
      }),
      styles: chatTapeStyles,
      messages,
    }),
    ChatList: chatListTemplate({
      styles: chatListStyles,
      profileLinkText: 'Профиль',
      ChatInput: chatInputTemplate({
        styles: ChatInputStyles,
        searchBar: true,
        placeholder: 'Поиск',
        name: 'search',
      }),
      cards,
    }),
  },
  profile: {
    styles: profileStyles,
    BackButton: backButtonTemplate(profileBackButtonProps),
    ProfileTable: profileTableTemplate({
      styles: profileTableStyles,
      fields: profile,
      links: profileLinks,
      form: false,
    }),
  },
  editProfile: {
    styles: editProfileStyles,
    BackButton: backButtonTemplate(profileBackButtonProps),
    ProfileTable: profileTableTemplate({
      styles: profileTableStyles,
      form: true,
      EditProfileForm: profileFormTemplate({
        styles: editProfileFormStyles,
        fields: profileInputs,
        Button: buttonTemplate(
          formButtonProps({ id: 'formButtonEditProfile' }),
        ),
      }),
    }),
  },
  editPassword: {
    styles: editPasswordStyles,
    BackButton: backButtonTemplate(profileBackButtonProps),
    ProfileTable: profileTableTemplate({
      styles: profileTableStyles,
      fields: profile,
      form: true,
      EditProfileForm: profileFormTemplate({
        styles: editProfileFormStyles,
        fields: profilePasswordInputs,
        Button: buttonTemplate(
          formButtonProps({ id: 'formButtonChangePassword' }),
        ),
      }),
    }),
  },
  error404: {
    styles: error404Styles,
    Error: error({
      styles: ErrorStyles,
      code: '404',
      description: 'Не туда попали',
    }),
    Link: linkTemplate({
      styles: linkStyles,
      text: 'Назад к чатам',
      id: 'chat',
      small: true,
    }),
  },
  error503: {
    styles: error503Styles,
    Error: error({
      styles: ErrorStyles,
      code: '503',
      description: 'Мы уже фиксим',
    }),
    Link: linkTemplate({
      styles: linkStyles,
      text: 'Назад к чатам',
      id: 'chat',
      small: true,
    }),
  },
};
