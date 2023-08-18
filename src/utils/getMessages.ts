import WebsocketController from '../controllers/WebsocketController';
import {
  getMessagesFromStore,
  saveMessagesToStore,
} from '../sevices/store/Actions';

export const getMessages = (socket: WebsocketController, offset = '0') => {
  socket.emit('get old', offset);
  socket.on('', data => {
    const dataIsArray = Array.isArray(data);
    if (!dataIsArray) {
      return;
    }

    const messages = data.filter(item => item.type === 'message');
    const newMessagesArray = [
      ...new Set([...messages, ...getMessagesFromStore()]),
    ];
    saveMessagesToStore(newMessagesArray.reverse());
    console.log(getMessagesFromStore());
  });
};
