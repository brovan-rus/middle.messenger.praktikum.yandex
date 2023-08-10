import chatCardStyles from '../components/ChatCard/ChatCard.module.css';

export type Card = {
  name: string;
  text: string;
  image: boolean;
  avatar: string;
  newMessages: number;
  timeDay: string;
  active: boolean;
  styles: typeof chatCardStyles;
  events?: Record<string, () => void>;
  id?: number;
};

export const cards: Card[] = [
  {
    id: 1,
    name: 'Андрей',
    text: 'Текст',
    image: false,
    avatar: '',
    newMessages: 4,
    timeDay: '12:00',
    styles: chatCardStyles,
    active: false,
    events: {
      click: () => {
        console.log('change chat', cards[0].id);
      },
    },
  },
  {
    name: 'Константин',
    text: 'Сочинение',
    image: false,
    avatar: '',
    newMessages: 2,
    timeDay: '15:00',
    styles: chatCardStyles,
    active: false,
  },
  {
    name: 'Виктор',
    text: 'Письмо',
    image: false,
    avatar: '',
    newMessages: 0,
    timeDay: 'Пт',
    styles: chatCardStyles,
    active: false,
  },
  {
    name: 'Виктор',
    text: 'Очень длинный тест. Очень длинный тест. Очень длинный тест. Очень длинный тест. ',
    image: false,
    avatar: '',
    newMessages: 0,
    timeDay: 'Пт',
    styles: chatCardStyles,
    active: true,
  },
  {
    name: 'Виктор',
    text: 'Письмо',
    image: false,
    avatar: '',
    newMessages: 0,
    timeDay: 'Пт',
    styles: chatCardStyles,
    active: false,
  },
  {
    name: 'Виктор',
    text: 'Очень длинный тест. Очень длинный тест. Очень длинный тест. Очень длинный тест.',
    image: false,
    avatar: '',
    newMessages: 0,
    timeDay: '12 апреля 2020',
    styles: chatCardStyles,
    active: false,
  },
];
