import Handlebars from 'handlebars';
import cards from '../mocks/cards';
import {
  profile,
  profileInputs,
  profilePasswordInputs,
} from '../mocks/profile';
import profileLinks from '../mocks/profileLinks';
import { loginInputs, registerInputs } from '../mocks/userForm';
import loginStyles from '../pages/Login/Login.module.css';
import chatStyles from '../pages/Chat/Chat.module.css';
import Placeholder from '../components/Placeholder/Placeholder.template';
import PlaceholderStyles from '../components/Placeholder/Placeholder.module.css';
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

const placeholderTemplate = Handlebars.compile(Placeholder);
const chatListTemplate = Handlebars.compile(ChatList);
const chatInputTemplate = Handlebars.compile(ChatInput);
const chatCardTemplate = Handlebars.compile(ChatCard);
const backButtonTemplate = Handlebars.compile(BackButton);
const buttonTemplate = Handlebars.compile(Button);
const profileTableTemplate = Handlebars.compile(ProfileTable);
const profileFieldTemplate = Handlebars.compile(ProfileFiled);
const linkTemplate = Handlebars.compile(Link);
const profileFormTemplate = Handlebars.compile(ProfileForm);
const formInputTemplate = Handlebars.compile(FormInput);
const userFromTemplate = Handlebars.compile(UserForm);
const error = Handlebars.compile(Error);

Handlebars.registerPartial('card', chatCardTemplate);
Handlebars.registerPartial('profileField', profileFieldTemplate);
Handlebars.registerPartial('link', linkTemplate);
Handlebars.registerPartial('formInput', formInputTemplate);

const profileBackButtonProps = {
  styles: backButtonStyles,
  Button: buttonTemplate({
    styles: buttonStyles,
    backButton: true,
    id: 'backButton',
  }),
};

const formButtonProps = ({ id, text = 'Сохранить' }) => {
  return {
    styles: buttonStyles,
    formButton: true,
    id,
    text,
  };
};

export default {
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
    Placeholder: placeholderTemplate({
      text: 'Выберите чат чтобы отправить сообщение',
      styles: PlaceholderStyles,
    }),
    ChatList: chatListTemplate({
      styles: chatListStyles,
      profile_link_text: 'Профиль',
      ChatInput: chatInputTemplate({
        styles: ChatInputStyles,
        searchBar: true,
        placeholder: 'Поиск',
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
