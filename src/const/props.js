import Handlebars from "handlebars";
import {cards} from "../mocks/cards";
import {profile, profileInputs} from "../mocks/profile";
import {profileLinks} from "../mocks/profileLinks";
import loginStyles from '../pages/Login.module.css';
import chatStyles from '../pages/Chat/Chat.module.css';
import Placeholder from '../components/Placeholder/Placeholder.template';
import PlaceholderStyles from '../components/Placeholder/Placeholder.module.css'
import ChatList from '../components/ChatList/ChatList.template';
import chatListStyles from '../components/ChatList/ChatList.module.css'
import ChatInput from '../components/ChatInput/ChatInput.template'
import ChatInputStyles from '../components/ChatInput/ChatInput.module.css';
import ChatCard from '../components/ChatCard/ChatCard.template'
import profileStyles from '../pages/Profile/Profile.module.css';
import BackButton from '../components/BackButton/BackButton.template';
import backButtonStyles from "../components/BackButton/BackButton.module.css";
import Button from '../components/Button/Button.template';
import buttonStyles from '../components/Button/Button.module.css';
import ProfileTable from '../components/ProfileTable/ProfileTable.template'
import profileTableStyles from '../components/ProfileTable/ProfileTable.module.css';
import ProfileFiled from '../components/ProfileField/ProfileField.template';
import ProfileLink from '../components/ProfileLink/ProfileLink.template';
import editProfileStyles from '../pages/EditProfile/EditProfile.module.css';
import EditProfileForm from '../components/EditProfileForm/ProfileForm.template';
import editProfileFormStyles from '../components/EditProfileForm/ProfileForm.module.css';
import EditProfileInput from '../components/ProfileInput/ProfileInput.template';

const placeholderTemplate = Handlebars.compile(Placeholder);
const chatListTemplate = Handlebars.compile(ChatList);
const chatInputTemplate = Handlebars.compile(ChatInput);
const chatCardTemplate = Handlebars.compile(ChatCard);
const backButtonTemplate = Handlebars.compile(BackButton);
const buttonTemplate = Handlebars.compile(Button);
const profileTableTemplate = Handlebars.compile(ProfileTable);
const profileFieldTemplate = Handlebars.compile(ProfileFiled);
const profileLinkTemplate = Handlebars.compile(ProfileLink);
const editProfileFormTemplate = Handlebars.compile(EditProfileForm);
const editProfileInputTemplate = Handlebars.compile(EditProfileInput);

Handlebars.registerPartial('card', chatCardTemplate);
Handlebars.registerPartial('profileField', profileFieldTemplate);
Handlebars.registerPartial('profileLink', profileLinkTemplate);
Handlebars.registerPartial('profileInput', editProfileInputTemplate);

const profileBackButtonProps = {
    styles: backButtonStyles,
    Button: buttonTemplate({
        styles: buttonStyles,
        backButton: true,
        id: 'backButton'
    }),
}

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
        BackButton: backButtonTemplate(profileBackButtonProps),
        ProfileTable: profileTableTemplate({
            styles: profileTableStyles,
            fields: profile,
            links: profileLinks,
        })
    },
    editProfile: {
        styles: editProfileStyles,
        BackButton: backButtonTemplate(profileBackButtonProps),
        ProfileTable: profileTableTemplate({
            styles: profileTableStyles,
            fields: profile,
            form: true,
            EditProfileForm: editProfileFormTemplate({
                styles: editProfileFormStyles,
                fields: profileInputs,
                Button: buttonTemplate({
                    styles: buttonStyles,
                    formButton: true,
                    id: 'formButton',
                    text: 'Сохранить'
                }),
            })
        })
    }
}

