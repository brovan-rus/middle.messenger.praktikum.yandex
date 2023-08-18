const isDateInThisWeek = (date: Date) => {
  const todayObj = new Date();
  const todayDate = todayObj.getDate();
  const todayDay = todayObj.getDay();

  // get first date of week
  const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay));

  // get last date of week
  const lastDayOfWeek = new Date(firstDayOfWeek);
  lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);

  // if date is equal or within the first and last dates of the week
  return date >= firstDayOfWeek && date <= lastDayOfWeek;
};

const formatMinutes = (minutes: number) => {
  return minutes < 9 ? `0${minutes}` : `${minutes}`;
};

export const getFormattedTime = (messageTime: string) => {
  const today = new Date();
  const date = new Date(messageTime);
  const dateIsToday = today.getDate() === date.getDate();
  const dateOnThisWeek = isDateInThisWeek(date);
  const daysOfTheWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  const months = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];
  if (dateIsToday) {
    return `${date.getHours()}:${formatMinutes(date.getMinutes())}`;
  } else if (dateOnThisWeek) {
    return daysOfTheWeek[date.getDay()];
  } else {
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }
};
