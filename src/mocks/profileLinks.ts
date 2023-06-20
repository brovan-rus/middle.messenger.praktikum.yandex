import profileLinkStyles from '../components/Link/Link.module.css';

export type ProfileLink = {
  text: string;
  id: string;
  red: boolean;
  styles: typeof profileLinkStyles;
};

export const profileLinks: ProfileLink[] = [
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
