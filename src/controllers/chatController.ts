import chatApi from '../sevices/api/ChatApi';
import {
  getUserFromStore,
  saveChatListToStore,
} from '../sevices/store/Actions';
import WebsocketController from './WebsocketController';
import { checkResponse } from './getDataFromResponse';

export const getChatsList = async () => {
  const chatListRes = (await chatApi.getChats()) as XMLHttpRequest;
  try {
    let chatList = [];
    chatList = JSON.parse(checkResponse(chatListRes));
    for (const chat of chatList) {
      const chatUsersRes = (await chatApi.getChatUsers(
        chat.id as string,
      )) as XMLHttpRequest;
      const wsTokenRes = (await chatApi.getWsToken(chat.id)) as XMLHttpRequest;
      chat.users =
        chatUsersRes.status === 200 ? JSON.parse(chatUsersRes.response) : [];
      chat.wsToken =
        wsTokenRes.status === 200 ? JSON.parse(wsTokenRes.response) : '';
      const currentUser = getUserFromStore();
      chat.webSocketController = new WebsocketController(
        `${currentUser.id}/${chat.id}/${chat.wsToken.token}`,
      );
    }
    saveChatListToStore(chatList);
  } catch (error) {
    console.log(error);
  }
};

export const addUserToChat = async (user: string, chat: string) => {
  try {
    const res = (await chatApi.addUser(user, chat)) as XMLHttpRequest;
    checkResponse(res);
  } catch (error) {
    console.log(error);
  }
};

export const removeUserFromChat = async (user: string, chat: string) => {
  try {
    const res = (await chatApi.removeUser(user, chat)) as XMLHttpRequest;
    checkResponse(res);
  } catch (error) {
    console.log(error);
  }
};

export const createNewChat = async (chatName: string) => {
  try {
    const res = (await chatApi.createChat(chatName)) as XMLHttpRequest;
    return JSON.parse(checkResponse(res));
  } catch (error) {
    console.log(error);
  }
};
