import store from './Store';
import { Indexed } from '../../types/Indexed';
import { getAvatarPath } from '../../utils/getAvatarPath';

export const getUserFromStore = () => {
  const state = store.getState();
  return state.user ?? {};
};

export const setUserToStore = (state: Indexed) => {
  store.set('user', {
    ...state,
    avatar: state.avatar ? getAvatarPath(state.avatar as string) : {},
  });
};
