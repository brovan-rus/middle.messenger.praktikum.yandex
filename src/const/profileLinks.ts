import profileLinkStyles from '../components/Link/Link.module.css';
import { Path } from '../types/path';
import { router } from '../sevices/router/Router';
import { logout } from '../controllers/authController';

export type ProfileLink = {
  text: string;
  id: string;
  red: boolean;
  styles: typeof profileLinkStyles;
  events?: {
    click: (e?: Event) => void;
  };
};

export const profileLinks: ProfileLink[] = [
  {
    text: 'Изменить данные',
    id: 'editProfile',
    red: false,
    styles: profileLinkStyles,
    events: {
      click: e => {
        e?.preventDefault();
        router.navigate(Path.EDIT_PROFILE);
      },
    },
  },
  {
    text: 'Изменить пароль',
    id: 'editPassword',
    red: false,
    styles: profileLinkStyles,
    events: {
      click: e => {
        e?.preventDefault();
        router.navigate(Path.EDIT_PASSWORD);
      },
    },
  },
  {
    text: 'Выйти',
    id: 'exit',
    red: true,
    styles: profileLinkStyles,
    events: {
      click: async (e?: Event) => {
        e?.preventDefault();
        await logout();
      },
    },
  },
];
