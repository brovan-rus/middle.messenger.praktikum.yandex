import chatApi from '../sevices/api/ChatApi';
import {
  getUserFromStore,
  saveChatListToStore,
} from '../sevices/store/Actions';
import WebsocketController from './WebsocketController';

export const getChatsList = async () => {
  const chatListRes = (await chatApi.getChats()) as XMLHttpRequest;
  let chatList = [];
  if (chatListRes.status === 200) {
    chatList = JSON.parse(chatListRes.response);
  } else {
    alert(JSON.parse(chatListRes.response).reason);
    return;
  }
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
};

export const addUserToChat = async (user: string, chat: string) => {
  const res = (await chatApi.addUser(user, chat)) as XMLHttpRequest;
  if (res.status === 200) {
    console.log(res.response);
  } else {
    alert(JSON.parse(res.response).reason);
  }
};

export const createNewChat = async (chatName: string) => {
  const res = (await chatApi.createChat(chatName)) as XMLHttpRequest;
  if (res.status === 200) {
    return JSON.parse(res.response);
  } else {
    alert(JSON.parse(res.response).reason);
  }
};
