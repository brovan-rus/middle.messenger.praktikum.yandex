import profileLinkStyles from '../components/ProfileLink/ProfileLink.module.css';

export const profileLinks = [
    {text: 'Изменить данные', id: 'editProfile', red: false, styles: profileLinkStyles},
    {text: 'Изменить пароль', id: 'editPassword', red: false, styles: profileLinkStyles},
    {text: 'Выйти', id: 'exit', red: true, styles: profileLinkStyles},
]