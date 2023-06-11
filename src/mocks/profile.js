import profileFieldStyles from '../components/ProfileField/ProfileField.module.css';
import profileInputStyles from '../components/ProfileInput/ProfileInput.module.css';

const profileInfo = [
    {fieldName: 'Почта', fieldValue: 'pochta@yandex.ru', name: 'email', type: 'email'},
    {fieldName: 'Логин', fieldValue: 'ivanivanov', name: 'login', type: 'text'},
    {fieldName: 'Имя', fieldValue: 'Иван', name: 'first_name', type: 'text'},
    {fieldName: 'Фамилия', fieldValue: 'Иванов', name: 'second_name', type: 'text'},
    {fieldName: 'Имя в чате', fieldValue: 'Иван', name: 'display_name', type: 'text'},
    {fieldName: 'Телефон', fieldValue: '+7 (909) 967 30 30', name: 'phone', type: 'text'},
];

export const profile = profileInfo.map((item) => {
    return {...item, styles: profileFieldStyles}
});

export const profileInputs = profileInfo.map((item) => {
    return {...item, styles: profileInputStyles}
});