import profileLinkStyles from '../components/Link/Link.module.css';
import { onNavigate } from '../const/router';
import { Path } from '../types/path';

export type ProfileLink = {
  text: string;
  id: string;
  red: boolean;
  styles: typeof profileLinkStyles;
  events?: {
    click: () => void;
  };
};

export const profileLinks: ProfileLink[] = [
  {
    text: 'Изменить данные',
    id: 'editProfile',
    red: false,
    styles: profileLinkStyles,
    events: {
      click: () => {
        onNavigate(Path.EDIT_PROFILE);
      },
    },
  },
  {
    text: 'Изменить пароль',
    id: 'editPassword',
    red: false,
    styles: profileLinkStyles,
    events: {
      click: () => {
        onNavigate(Path.EDIT_PASSWORD);
      },
    },
  },
  { text: 'Выйти', id: 'exit', red: true, styles: profileLinkStyles },
];
