import store from './Store';
import { Indexed } from '../../types/Indexed';

export const getUserFromStore = () => {
  const state = store.getState();
  return state.user ?? {};
};

export const setUserToStore = (state: Indexed) => {
  store.set('user', state);
};
