import store from './Store';
import { Indexed } from '../../types/Indexed';
import { getAvatarPath } from '../../utils/getAvatarPath';
import { Props } from '../../types/props';
import { getMessages } from '../../utils/getMessages';

export const getUserFromStore = () => {
  const state = store.getState();
  return state.user ?? {};
};

export const setUserToStore = (state: Indexed) => {
  if (state?.id) {
    store.set('user', {
      ...state,
      avatar: state.avatar ? getAvatarPath(state.avatar as string) : undefined,
    });
  } else {
    store.set('user', state);
  }
};

export const deleteChatFromChatList = (chatId: string) => {
  const chatList = store.getState().chatList;
  store.set(
    'chatList',
    chatList.filter((chat: Indexed) => chat.id !== chatId),
  );
};

export const getMessagesFromStore = () => {
  const state = store.getState();
  return state.messages ?? [];
};

export const saveMessagesToStore = (messages: Indexed[]) => {
  store.set('messages', messages);
};

export const addMessageToStore = (message: Indexed) => {
  const messages = getMessagesFromStore();
  store.set('messages', [...messages, message]);
};

const clearMessages = () => {
  store.set('messages', []);
};

export const getChatListFromStore = () => {
  const state = store.getState();
  return state.chatList ?? [];
};

const renewChatLastMessage = (chatId: string, message: Indexed) => {
  const chatList = getChatListFromStore();
  const currentChat = chatList.find((chat: Indexed) => chat.id === chatId);
  currentChat.last_message = message;
  store.set('chatList', chatList);
};

export const saveChatListToStore = (state: Indexed[]) => {
  store.set(
    'chatList',
    state.map((chat: Props) => {
      chat.webSocketController?.connect();
      if (chat.active && !chat?.webSocketConroller?.isConnected) {
        clearMessages();
        chat.webSocketController.removeAllListeners();
        chat.webSocketController.on('message', (data: Indexed) => {
          addMessageToStore(data);
          renewChatLastMessage(chat.id, data);
          console.log(chat);
        });
        getMessages(chat.webSocketController);
      } else {
        chat.webSocketController.removeAllListeners();
        chat.webSocketController.on('message', (data: Indexed) => {
          renewChatLastMessage(chat.id, data);
        });
      }
      return {
        ...chat,
        active: chat.active || false,
        avatar: chat.avatar ? getAvatarPath(chat.avatar) : undefined,
      };
    }),
  );
};

export const getActiveChatFromStore = () => {
  const chatList = store.getState().chatList;
  return !chatList || chatList.length === 0
    ? false
    : chatList.find((chat: Indexed) => chat.active);
};
