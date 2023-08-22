import { Indexed } from '../types/Indexed';

export const saveToLocalStore = ({
  name,
  object,
}: {
  name: string;
  object: Indexed | string;
}) => {
  if (typeof object === 'object' && object !== null) {
    localStorage.setItem(name, JSON.stringify(object));
  } else {
    localStorage.setItem(name, object);
  }
};

export const getFromLocalStore = ({ name }: { name: string }) => {
  const item = localStorage.getItem(name);
  try {
    return item && JSON.parse(item);
  } catch {
    return item;
  }
};

export const deleteFromLocalStorage = ({ name }: { name: string }) => {
  localStorage.removeItem(name);
};
