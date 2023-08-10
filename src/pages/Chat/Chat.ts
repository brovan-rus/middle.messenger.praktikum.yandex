import Block from '../../utils/Block';
import template from './Chat.template';
import { Props } from '../../types/props';
import { props as globalProps } from '../../const/props';
import Placeholder from '../../components/Placeholder';
import ChatInput from '../../components/ChatInput';
import ChatList from '../../components/ChatList';
import ChatCard from '../../components/ChatCard';
import { Card } from '../../mocks/cards';
import ChatTape from '../../components/ChatTape';
import { Message as MessageType } from '../../mocks/messages';
import Message from '../../components/Message';
import Button from '../../components/Button/Button';
import chatStyles from './Chat.module.css';

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
}

const { cards } = globalProps.chat.chatList;
const { messages, chatInput, button } = globalProps.chat.chatTape;
const placeholder = new Placeholder(globalProps.chat.placeholder);
const chatListInput = new ChatInput(globalProps.chat.chatList.chatInput);
const chatTapeInput = new ChatInput(chatInput);
const chatTapeButton = new Button(button);
const chatList = new ChatList({
  ...globalProps.chat.chatList,
  cards: cards.map((card: Card) => new ChatCard(card)),
  ChatInput: chatListInput,
});
const chatTape = new ChatTape({
  ...globalProps.chat.chatTape,
  messages: messages.map((message: MessageType) => new Message(message)),
  ChatInput: chatTapeInput,
  Button: chatTapeButton,
});

export default new Chat({
  ...globalProps.chat,
  ChatList: chatList,
  Placeholder: placeholder,
  ChatTape: chatTape,
});
