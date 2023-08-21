import { BaseApi } from './BaseApi';
import HTTP from '../../utils/HTTP';
import { jsonHeader } from './addJosnHeader';

const chatHttpInstance = new HTTP('chats', true);

class ChatApi extends BaseApi {
  getChats() {
    return chatHttpInstance.get('', {});
  }

  createChat(title: string) {
    return chatHttpInstance.post('', {
      headers: jsonHeader,
      data: { title },
    });
  }

  addUser(userId: string, chatId: string) {
    return chatHttpInstance.put('users', {
      headers: jsonHeader,
      data: { users: [userId], chatId: chatId },
    });
  }

  removeUser(userId: string, chatId: string) {
    return chatHttpInstance.delete('users', {
      headers: jsonHeader,
      data: { users: [userId], chatId: chatId },
    });
  }

  removeChat(chatId: string) {
    return chatHttpInstance.delete('', {
      headers: jsonHeader,
      data: { chatId },
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
