import loginStyles from '../pages/login.module.css';
import chatStyles from '../pages/chat/chat.module.css';
import Placeholder from '../components/Placeholder/Placeholder.hbs';
import PlaceholderStyles from '../components/Placeholder/Placeholder.module.css'
import ChatList from '../components/ChatList/ChatList.hbs';
import chatListStyles from '../components/ChatList/ChatList.module.css'
import ChatInput from '../components/ChatInput/ChatInput.hbs'
import ChatInputStyles from '../components/ChatInput/ChatInput.module.css';

export const props = {
    login: {
        styles: loginStyles
    },
    chat: {
        styles: chatStyles,
        Placeholder: Placeholder({text: 'Выберите чат чтобы отправить сообщение', styles: PlaceholderStyles}),
        ChatList: ChatList({
            styles: chatListStyles,
            profile_link_text: 'Профиль',
            ChatInput: ChatInput({styles: ChatInputStyles, searchBar: true, placeholder: 'Поиск'})
        }),
    },
}