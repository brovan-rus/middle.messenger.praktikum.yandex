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
import PlaceholderStyles from '../components/Placeholder/Placeholder.module.css';
import chatTapeStyles from '../components/ChatTape/ChatTape.module.css';
import chatListStyles from '../components/ChatList/ChatList.module.css';
import ChatInputStyles from '../components/ChatInput/ChatInput.module.css';
import profileStyles from '../pages/Profile/Profile.module.css';
import backButtonStyles from '../components/BackButton/BackButton.module.css';
import buttonStyles from '../components/Button/Button.module.css';
import profileTableStyles from '../components/ProfileTable/ProfileTable.module.css';
import linkStyles from '../components/Link/Link.module.css';
import editProfileStyles from '../pages/EditProfile/EditProfile.module.css';
import editProfileFormStyles from '../components/ProfileForm/ProfileForm.module.css';
import editPasswordStyles from '../pages/EidtPassword/EditPassword.module.css';
import userFormStyles from '../components/UserFrom/UserForm.module.css';
import registerStyles from '../pages/Register/Register.module.css';
import error404Styles from '../pages/Error404/Error404.module.css';
import error503Styles from '../pages/Error503/Error503.module.css';
import ErrorStyles from '../components/Error/Error.module.css';

import {
  BackButtonContext,
  ButtonContext,
  ChatContext,
  EditPasswordContext,
  EditProfileContext,
  Error404Context,
  Error503Context,
  LoginContext,
  ProfileContext,
  RegisterContext,
} from '../types/contexts';
import { ButtonType } from '../components/Button/Button';
import { onNavigate } from './router';
import { Path } from '../types/path';
import { Props } from '../types/props';

const profileBackButtonProps: BackButtonContext = {
  styles: backButtonStyles,
  button: {
    styles: buttonStyles,
    type: ButtonType.BACK_BUTTON,
  },
};

const formButtonProps = (props: Props): ButtonContext => {
  return {
    styles: buttonStyles,
    type: ButtonType.FORM_BUTTON,
    text: 'Сохранить',
    ...props,
  };
};

type GlobalProps = {
  login: LoginContext;
  register: RegisterContext;
  chat: ChatContext;
  profile: ProfileContext;
  editProfile: EditProfileContext;
  editPassword: EditPasswordContext;
  error404: Error404Context;
  error503: Error503Context;
};

export const props: GlobalProps = {
  login: {
    styles: loginStyles,
    userForm: {
      styles: userFormStyles,
      title: 'Вход',
      fields: loginInputs,
      button: formButtonProps({
        text: 'Авторизоваться',
        events: {
          click: () => onNavigate(Path.CHAT),
        },
      }),
      link: {
        text: 'Нет аккаунта?',
        styles: linkStyles,
        size: 'small',
        events: {
          click: () => onNavigate(Path.REGISTER),
        },
      },
    },
  },
  register: {
    styles: registerStyles,
    userForm: {
      styles: userFormStyles,
      title: 'Регистрация',
      fields: registerInputs,
      button: formButtonProps({
        text: 'Зарегистрироваться',
      }),
      link: {
        text: 'Войти?',
        styles: linkStyles,
        size: 'small',
        events: {
          click: () => onNavigate(Path.LOGIN),
        },
      },
    },
  },
  chat: {
    styles: chatStyles,
    chatSelected: true,
    placeholder: {
      text: 'Выберите чат чтобы отправить сообщение',
      styles: PlaceholderStyles,
    },
    chatTape: {
      chatName: 'Виктор',
      chatInput: {
        styles: ChatInputStyles,
        searchBar: false,
        name: 'message',
      },
      button: {
        styles: buttonStyles,
        type: ButtonType.SEND_BUTTON,
      },
      styles: chatTapeStyles,
      messages,
    },
    chatList: {
      styles: chatListStyles,
      profileLinkText: 'Профиль',
      chatInput: {
        styles: ChatInputStyles,
        searchBar: true,
        placeholder: 'Поиск',
        name: 'search',
      },
      cards,
    },
  },
  profile: {
    styles: profileStyles,
    backButton: profileBackButtonProps,
    profileTable: {
      styles: profileTableStyles,
      fields: profile,
      links: profileLinks,
      form: false,
    },
  },
  editProfile: {
    styles: editProfileStyles,
    backButton: profileBackButtonProps,
    profileTable: {
      styles: profileTableStyles,
      form: true,
      profileForm: {
        styles: editProfileFormStyles,
        fields: profileInputs,
        button: formButtonProps({ id: 'formButtonEditProfile' }),
      },
    },
  },
  editPassword: {
    styles: editPasswordStyles,
    backButton: profileBackButtonProps,
    profileTable: {
      styles: profileTableStyles,
      fields: profile,
      form: true,
      profileForm: {
        styles: editProfileFormStyles,
        fields: profilePasswordInputs,
        button: formButtonProps({ id: 'formButtonChangePassword' }),
      },
    },
  },
  error404: {
    styles: error404Styles,
    error: {
      styles: ErrorStyles,
      code: '404',
      description: 'Не туда попали',
    },
    link: {
      styles: linkStyles,
      text: 'Назад к чатам',
      size: 'small',
      color: 'blue',
      events: {
        click: () => onNavigate(Path.CHAT),
      },
    },
  },
  error503: {
    styles: error503Styles,
    error: {
      styles: ErrorStyles,
      code: '503',
      description: 'Мы уже фиксим',
    },
    link: {
      styles: linkStyles,
      text: 'Назад к чатам',
      size: 'small',
      color: 'blue',
      events: {
        click: () => onNavigate(Path.CHAT),
      },
    },
  },
};