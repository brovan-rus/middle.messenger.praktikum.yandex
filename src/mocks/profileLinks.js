import profileLinkStyles from '../components/Link/Link.module.css';

export default [
  {
    text: 'Изменить данные',
    id: 'editProfile',
    red: false,
    styles: profileLinkStyles,
  },
  {
    text: 'Изменить пароль',
    id: 'editPassword',
    red: false,
    styles: profileLinkStyles,
  },
  { text: 'Выйти', id: 'exit', red: true, styles: profileLinkStyles },
];
