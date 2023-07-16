import messagesStyles from '../components/Message/Message.module.css';

export type Message = {
  text: string;
  time: string;
  styles: typeof messagesStyles;
  sentByAuthor: boolean;
  delivered: boolean;
};

export const messages: Message[] = [
  {
    text:
      'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то ' +
      'момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все ' +
      'знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все ' +
      'еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с ' +
      'пленкой.\n',
    time: '11.56',
    styles: messagesStyles,
    sentByAuthor: false,
    delivered: false,
  },
  {
    text:
      'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то ' +
      'момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все ' +
      'знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все ' +
      'еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с ' +
      'пленкой.\n',
    time: '11.57',
    styles: messagesStyles,
    sentByAuthor: false,
    delivered: false,
  },
  {
    text: 'Круто',
    time: '11.59',
    styles: messagesStyles,
    sentByAuthor: true,
    delivered: true,
  },
  {
    text: 'Круто',
    styles: messagesStyles,
    time: '12.00',
    sentByAuthor: true,
    delivered: true,
  },
  {
    text:
      'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то ' +
      'момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все ' +
      'знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все ' +
      'еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с ' +
      'пленкой.\n',
    time: '12.05',
    styles: messagesStyles,
    sentByAuthor: false,
    delivered: false,
  },
  {
    text: 'Круто',
    time: '12.07',
    styles: messagesStyles,
    sentByAuthor: true,
    delivered: false,
  },
];
