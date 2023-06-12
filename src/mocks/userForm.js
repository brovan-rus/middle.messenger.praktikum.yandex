import fromInputStyles from '../components/FormInput/FormInput.module.css';

export const loginInputs = [
    {fieldName: 'Логин', name: 'login', type: 'text', styles: fromInputStyles, userForm: true},
    {fieldName: 'Пароль', name: 'password', type: 'password', styles: fromInputStyles, userForm: true},
]

export const registerInputs = [
    {fieldName: 'Почта', name: 'email', type: 'email', styles: fromInputStyles, userForm: true},
    {fieldName: 'Логин', name: 'login', type: 'text', styles: fromInputStyles, userForm: true},
    {fieldName: 'Имя', name: 'first_name', type: 'text', styles: fromInputStyles, userForm: true},
    {fieldName: 'Фамилия', name: 'second_name', type: 'text', styles: fromInputStyles, userForm: true},
    {fieldName: 'Телефон', name: 'phone', type: 'text', styles: fromInputStyles, userForm: true},
    {fieldName: 'Пароль', name: 'password', type: 'password', styles: fromInputStyles, userForm: true},
    {fieldName: 'Пароль ещё раз', name: 'passwordRepeat', type: 'password', styles: fromInputStyles, userForm: true},
]