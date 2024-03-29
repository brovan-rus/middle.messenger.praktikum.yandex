import Block from '../../abstracts/Block';
import template from './Chat.template';
import { Props } from '../../types/props';
import { props as globalProps } from '../../const/props';
import Placeholder from '../../components/Placeholder';
import ChatInput from '../../components/ChatInput';
import ChatList from '../../components/ChatList';
import ChatCard from '../../components/ChatCard';
import ChatTape from '../../components/ChatTape';
import Button from '../../components/Button/Button';
import chatStyles from './Chat.module.css';
import { Connect } from '../../sevices/store';
import {
  getActiveChatFromStore,
  getChatListFromStore,
} from '../../sevices/store/Actions';
import chatCardStyles from '../..//components/ChatCard/ChatCard.module.css';
import MessagesList from '../../components/MessagesList';
import { Indexed } from '../../types/Indexed';

class Chat extends Block {
  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      class: chatStyles.container,
    };
    this.renewAttributes(attr);
  }

  componentDidUpdate(_oldProps: Props, newProps: Props): boolean {
    if (newProps.cards.length > 0) {
      const renewedChatCards = newProps.cards.map(
        (card: Indexed) =>
          new ChatCard({ ...card, styles: chatCardStyles, chatId: card.id }),
      );
      this.children.ChatList.setProps({ cards: renewedChatCards });
    }
    return true;
  }
}

const { chatInput, button } = globalProps.chat.chatTape;
const placeholder = new Placeholder(globalProps.chat.placeholder);
const chatListInput = new ChatInput(globalProps.chat.chatList.chatInput);
const chatListButton = new Button(globalProps.chat.chatList.button);
const chatTapeInput = new ChatInput(chatInput);
const chatTapeButton = new Button(button);
const chatList = new ChatList({
  ...globalProps.chat.chatList,
  ChatInput: chatListInput,
  Button: chatListButton,
});
const chatTape = new ChatTape(
  {
    ...globalProps.chat.chatTape,
    ChatInput: chatTapeInput,
    Button: chatTapeButton,
    MessagesList: new MessagesList({ messages: [] }),
  },
  'section',
);

const ChatConnectedToStore = Connect(Chat, state => {
  return state
    ? {
        cards: getChatListFromStore(),
        chatSelected: !!getActiveChatFromStore(),
      }
    : [];
});

export default new ChatConnectedToStore(
  {
    ...globalProps.chat,
    ChatList: chatList,
    Placeholder: placeholder,
    ChatTape: chatTape,
  },
  'div',
);
