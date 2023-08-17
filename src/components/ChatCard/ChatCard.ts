import Block from '../../utils/Block';
import template from './ChatCard.template';
import { Props } from '../../types/props';
import {
  getChatListFromStore,
  saveChatListToStore,
} from '../../sevices/store/Actions';

class ChatCard extends Block {
  constructor(props: Props) {
    super('div', props);
    this.props.events = {
      click: (e: Event) => {
        const target = e.currentTarget as HTMLElement;
        const chatList = getChatListFromStore();
        const updatedChatList = chatList.map((chat: Props) => {
          return { ...chat, active: chat.id.toString() === target.id };
        });
        saveChatListToStore(updatedChatList);
      },
    };
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      id: this.props.chatId,
    };
    this.renewAttributes(attr);
  }
}

export default ChatCard;
