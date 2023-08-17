import store from './Store';
import { Indexed } from '../../types/Indexed';
import { getAvatarPath } from '../../utils/getAvatarPath';
import { Props } from '../../types/props';

export const getUserFromStore = () => {
  const state = store.getState();
  return state.user ?? {};
};

export const setUserToStore = (state: Indexed) => {
  store.set('user', {
    ...state,
    avatar: state.avatar ? getAvatarPath(state.avatar as string) : undefined,
  });
};

export const getMessagesFromStore = () => {
  const state = store.getState();
  return state.messages ?? [];
};

export const addMessageToStore = (message: Indexed) => {
  console.log('add', message);
  const messages = getMessagesFromStore();
  store.set('messages', [...messages, message]);
  console.log(getMessagesFromStore());
};
const clearMessages = () => {
  store.set('messages', []);
};
const setActiveChat = (chatId: string) => {
  clearMessages();
  store.set('activeChat', chatId);
};

export const saveChatListToStore = (state: Indexed[]) => {
  store.set(
    'chatList',
    state.map((chat: Props) => {
      if (chat.active && !chat?.webSocketConroller?.isConnected) {
        setActiveChat(chat.id);
        chat.webSocketController.connect();
        chat.webSocketController.on('message', (data: string) => {
          addMessageToStore(JSON.parse(data));
        });
      } else {
        chat.webSocketController.disconnect();
      }
      return { ...chat, active: chat.active || false };
    }),
  );
};

export const getChatListFromStore = () => {
  const state = store.getState();
  return state.chatList ?? {};
};

export const getActiveChatFromStore = () => {
  const chatList = store.getState().chatList;
  return chatList.length === 0
    ? {}
    : chatList.find((chat: Indexed) => chat.active);
};
