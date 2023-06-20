import formInputStyles from '../components/FormInput/FormInput.module.css';

export type FormInputProps = {
  fieldName: string;
  name: string;
  type: string;
  styles: typeof formInputStyles;
  userForm: boolean;
};

export const loginInputs: FormInputProps[] = [
  {
    fieldName: 'Логин',
    name: 'login',
    type: 'text',
    styles: formInputStyles,
    userForm: true,
  },
  {
    fieldName: 'Пароль',
    name: 'password',
    type: 'password',
    styles: formInputStyles,
    userForm: true,
  },
];

export const registerInputs: FormInputProps[] = [
  {
    fieldName: 'Почта',
    name: 'email',
    type: 'email',
    styles: formInputStyles,
    userForm: true,
  },
  {
    fieldName: 'Логин',
    name: 'login',
    type: 'text',
    styles: formInputStyles,
    userForm: true,
  },
  {
    fieldName: 'Имя',
    name: 'first_name',
    type: 'text',
    styles: formInputStyles,
    userForm: true,
  },
  {
    fieldName: 'Фамилия',
    name: 'second_name',
    type: 'text',
    styles: formInputStyles,
    userForm: true,
  },
  {
    fieldName: 'Телефон',
    name: 'phone',
    type: 'text',
    styles: formInputStyles,
    userForm: true,
  },
  {
    fieldName: 'Пароль',
    name: 'password',
    type: 'password',
    styles: formInputStyles,
    userForm: true,
  },
  {
    fieldName: 'Пароль ещё раз',
    name: 'passwordRepeat',
    type: 'password',
    styles: formInputStyles,
    userForm: true,
  },
];
