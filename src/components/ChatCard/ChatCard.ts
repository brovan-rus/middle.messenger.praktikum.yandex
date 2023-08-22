import Block from '../../utils/Block';
import template from './ChatCard.template';
import { Props } from '../../types/props';
import {
  getChatListFromStore,
  saveChatListToStore,
} from '../../sevices/store/Actions';
import { getFormattedTime } from '../../utils/getFormattedTime';

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
    this.props.timeDay = this.props.last_message
      ? getFormattedTime(this.props.last_message.time)
      : '';
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

  componentDidUpdate(_oldProps: Props, newProps: Props): boolean {
    this.props.timeDay = getFormattedTime(newProps.props.last_message.time);
    return true;
  }
}

export default ChatCard;
