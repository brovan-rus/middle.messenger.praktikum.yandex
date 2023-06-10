import Handlebars from "handlebars";
import {cards} from "../mocks/cards";
import {profile} from "../mocks/profile";
import {profileLinks} from "../mocks/profileLinks";
import loginStyles from '../pages/login.module.css';
import chatStyles from '../pages/chat/chat.module.css';
import Placeholder from '../components/Placeholder/Placeholder.template';
import PlaceholderStyles from '../components/Placeholder/Placeholder.module.css'
import ChatList from '../components/ChatList/ChatList.template';
import chatListStyles from '../components/ChatList/ChatList.module.css'
import ChatInput from '../components/ChatInput/ChatInput.template'
import ChatInputStyles from '../components/ChatInput/ChatInput.module.css';
import ChatCard from '../components/ChatCard/ChatCard.template'
import profileStyles from '../pages/profile/profile.module.css';
import BackButton from '../components/BackButton/BackButton.template';
import backButtonStyles from "../components/BackButton/BackButton.module.css";
import Button from '../components/Button/Button.template';
import buttonStyles from '../components/Button/Button.module.css';
import ProfileTable from '../components/ProfileTable/ProfileTable.template'
import profileTableStyles from '../components/ProfileTable/ProfileTable.module.css';
import ProfileFiled from '../components/ProfileField/ProfileField.template';
import ProfileLink from '../components/ProfileLink/ProfileLink.template';


const placeholderTemplate = Handlebars.compile(Placeholder);
const chatListTemplate = Handlebars.compile(ChatList);
const chatInputTemplate = Handlebars.compile(ChatInput);
const chatCardTemplate = Handlebars.compile(ChatCard);
const backButtonTemplate = Handlebars.compile(BackButton);
const buttonTemplate = Handlebars.compile(Button);
const profileTableTemplate = Handlebars.compile(ProfileTable);
const profileFieldTemplate = Handlebars.compile(ProfileFiled);
const profileLinkTemplate = Handlebars.compile(ProfileLink);

Handlebars.registerPartial('card', chatCardTemplate);
Handlebars.registerPartial('profileField', profileFieldTemplate);
Handlebars.registerPartial('profileLink', profileLinkTemplate);


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
    profile: {
        styles: profileStyles,
        BackButton: backButtonTemplate({
            styles: backButtonStyles,
            Button: buttonTemplate({
                styles: buttonStyles,
                backButton: true,
                id: 'backButton'
            }),
        }),
        ProfileTable: profileTableTemplate({
            styles: profileTableStyles,
            fields: profile,
            links: profileLinks,
        })
    }
}

