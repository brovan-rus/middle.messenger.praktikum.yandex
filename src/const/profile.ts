import profileFieldStyles from '../components/ProfileField/ProfileField.module.css';
import fromInputStyles from '../components/FormInput/FormInput.module.css';

type ProfileStyles = typeof profileFieldStyles | typeof fromInputStyles;

export type ProfileInfo = {
  fieldName: string;
  fieldValue?: string;
  name: string;
  type: string;
  styles?: ProfileStyles;
};

const profileInfo: ProfileInfo[] = [
  {
    fieldName: 'Почта',
    fieldValue: 'pochta@yandex.ru',
    name: 'email',
    type: 'email',
  },
  { fieldName: 'Логин', fieldValue: 'ivanivanov', name: 'login', type: 'text' },
  { fieldName: 'Имя', fieldValue: 'Иван', name: 'first_name', type: 'text' },
  {
    fieldName: 'Фамилия',
    fieldValue: 'Иванов',
    name: 'second_name',
    type: 'text',
  },
  {
    fieldName: 'Имя в чате',
    fieldValue: 'Иван',
    name: 'display_name',
    type: 'text',
  },
  {
    fieldName: 'Телефон',
    fieldValue: '+7 (909) 967 30 30',
    name: 'phone',
    type: 'text',
  },
];

const changePassword: ProfileInfo[] = [
  { fieldName: 'Старый пароль', name: 'oldPassword', type: 'password' },
  { fieldName: 'Новый пароль', name: 'newPassword', type: 'password' },
  {
    fieldName: 'Повторите новый пароль',
    name: 'newPasswordRepeat',
    type: 'password',
  },
];

export const profile: ProfileInfo[] = profileInfo.map(item => {
  return { ...item, styles: profileFieldStyles };
});

export const profileInputs: ProfileInfo[] = profileInfo.map(item => {
  return { ...item, styles: fromInputStyles };
});

export const profilePasswordInputs: ProfileInfo[] = changePassword.map(item => {
  return { ...item, styles: fromInputStyles };
});
