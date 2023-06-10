import Handlebars from "handlebars";
import loginStyles from '../pages/login.module.css';
import chatStyles from '../pages/chat/chat.module.css';
import Placeholder from '../components/Placeholder/Placeholder.template';
import PlaceholderStyles from '../components/Placeholder/Placeholder.module.css'
import ChatList from '../components/ChatList/ChatList.template';
import chatListStyles from '../components/ChatList/ChatList.module.css'
import ChatInput from '../components/ChatInput/ChatInput.template'
import ChatInputStyles from '../components/ChatInput/ChatInput.module.css';
import ChatCard from '../components/ChatCard/ChatCard.template'


const placeholderTemplate = Handlebars.compile(Placeholder);
const chatListTemplate = Handlebars.compile(ChatList);
const chatInputTemplate = Handlebars.compile(ChatInput);
const chatCardTemplate = Handlebars.compile(ChatCard);
Handlebars.registerPartial('card', chatCardTemplate);

const cards = [
    {
        name: 'Андрей',
        text: 'Текст',
        image: false,
        avatar: '',
        newMessages: 4,
        timeDay: '12:00'
    },
    {
        name: 'Константин',
        text: 'Сочинение',
        image: false,
        avatar: '',
        newMessages: 2,
        timeDay: '15:00'
    },
    {
        name: 'Виктор',
        text: 'Пиьмсо',
        image: false,
        avatar: '',
        newMessages: 0,
        timeDay: 'Пт'
    },
]

export const props = {
    login: {
        styles: loginStyles
    },
    chat: {
        styles: chatStyles,
        Placeholder: placeholderTemplate({text: 'Выберите чат чтобы отправить сообщение', styles: PlaceholderStyles}),
        ChatList: chatListTemplate({
            styles: chatListStyles,
            profile_link_text: 'Профиль',
            ChatInput: chatInputTemplate({styles: ChatInputStyles, searchBar: true, placeholder: 'Поиск'}),
            cards: cards,
        }),
    },
}

