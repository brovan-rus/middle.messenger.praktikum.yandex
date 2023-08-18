import { BaseApi } from './BaseApi';
import HTTP from '../../utils/HTTP';

const chatHttpInstance = new HTTP('chats', true);

class ChatApi extends BaseApi {
  getChats() {
    return chatHttpInstance.get('', {});
  }

  createChat(title: string) {
    return chatHttpInstance.post('', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      data: { title },
    });
  }

  addUser(userId: string, chatId: string) {
    return chatHttpInstance.put('users', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      data: { users: [userId], chatId: chatId },
    });
  }

  removeUser(userId: string, chatId: string) {
    return chatHttpInstance.delete('users', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      data: { userId: [userId], chatId: chatId },
    });
  }

  getChatUsers(chatId: string) {
    return chatHttpInstance.get(`${chatId}/users`, {});
  }

  getWsToken(chatId: string) {
    return chatHttpInstance.post(`/token/${chatId}/`, {});
  }
}

export default new ChatApi();
