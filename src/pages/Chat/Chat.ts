import Block from '../../utils/Block';
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
import { getChatListFromStore } from '../../sevices/store/Actions';
import chatCardStyles from '../..//components/ChatCard/ChatCard.module.css';
import MessagesList from '../../components/MessagesList';
import { Indexed } from '../../types/Indexed';

class Chat extends Block {
  constructor(props: Props) {
    super('div', props);
  }

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
const chatTapeInput = new ChatInput(chatInput);
const chatTapeButton = new Button(button);
const chatList = new ChatList({
  ...globalProps.chat.chatList,
  ChatInput: chatListInput,
});
const chatTape = new ChatTape({
  ...globalProps.chat.chatTape,
  ChatInput: chatTapeInput,
  Button: chatTapeButton,
  MessagesList: new MessagesList({ messages: [] }),
});

const ChatConnectedToStore = Connect(Chat, state => {
  return state ? { cards: getChatListFromStore() } : [];
});

export default new ChatConnectedToStore({
  ...globalProps.chat,
  ChatList: chatList,
  Placeholder: placeholder,
  ChatTape: chatTape,
});
