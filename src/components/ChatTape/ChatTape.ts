import Block from '../../utils/Block';
import template from './ChatTape.template';
import { Props } from '../../types/props';
import chatTapeStyles from './ChatTape.module.css';
import { assertIsDefined } from '../../utils/assertIsDefined';
import { addFormEvents } from '../../utils/addFormEvents';
import { ValidationData } from '../../utils/validate';
import { FormData } from '../../types/formData';
import TooltipMenu from '../Tooltip/TooltipMenu';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import plus from '../../../images/icons/plus.svg?inline';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import iks from '../../../images/icons/iks.svg?inline';
import Modal from '../Modal/Modal';
import UserModal from '../UserModal/UserModal';
import {
  addUserModalProps,
  removeChatModalProps,
  removeUserModalProps,
} from '../../const/props';
import Button, { ButtonType } from '../Button/Button';
import FormInput from '../FormInput';
import formInputStyles from '../FormInput/FormInput.module.css';
import { getActiveChatFromStore } from '../../sevices/store/Actions';
import { Indexed } from '../../types/Indexed';
import Message from '../Message';
import WarnModal from '../WarnModal/WarnModal';

const userModal = (props: Props) =>
  new UserModal({
    title: props.title,
    Button: new Button({
      type: ButtonType.FORM_BUTTON,
      text: props.buttonText,
    }),
    FormInput: new FormInput({
      inputName: props.inputName,
      fieldValue: '',
      fieldName: props.fieldTitle,
      styles: formInputStyles,
      type: 'text',
      userForm: true,
    }),
    events: {
      submit: props.submit,
    },
    styles: props.styles,
  });

const warnModal = (props: Props) =>
  new WarnModal({
    title: props.title,
    text: props.text,
    Button: new Button({
      type: ButtonType.FORM_BUTTON,
      text: props.buttonText,
    }),
    events: {
      submit: props.submit,
    },
    styles: props.styles,
  });

class ChatTape extends Block {
  contextMenu: TooltipMenu | undefined = undefined;

  constructor(props: Props) {
    super('section', props);
    assertIsDefined(this.element);
    const validationEvents = addFormEvents(
      this.element,
      this.showValidation.bind(this),
      this.submit.bind(this),
    );
    this.props.events = {
      ...this.props.events,
      ...validationEvents,
      click: (e: Event) => {
        const target = e.target as HTMLElement;
        if (target.dataset.action === 'openChatMenu') {
          if (this.contextMenu?.opened) {
            this.contextMenu.close();
          } else {
            this.contextMenu = new TooltipMenu({
              menuItems: [
                {
                  title: 'Добавить пользователя',
                  icon: `${plus}`,
                  action: () => {
                    new Modal(userModal(addUserModalProps)).open();
                  },
                },
                {
                  title: 'Удалить пользователя',
                  icon: `${iks}`,
                  action: () => {
                    new Modal(userModal(removeUserModalProps)).open();
                  },
                },
                {
                  title: 'Удалить чат',
                  icon: `${iks}`,
                  action: () => {
                    new Modal(warnModal(removeChatModalProps)).open();
                  },
                },
              ],
              targetElement: target,
            });
            this.contextMenu.open();
          }
        }
      },
    };
  }

  showValidation(validationData: ValidationData, formData: FormData) {
    const chatInput = this.children.ChatInput;
    if (validationData.message) {
      chatInput.setProps({
        ...chatInput.props,
        validationError: validationData.message,
        value: formData.message,
      });
    } else {
      chatInput.setProps({
        ...chatInput.props,
        validationError: '',
        value: formData.message,
      });
    }
  }

  submit(data: Indexed) {
    const currentActiveChat = getActiveChatFromStore();
    currentActiveChat.webSocketController.emit('message', data.message);
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      class: chatTapeStyles.container,
    };
    this.renewAttributes(attr);
    console.log('mounted');
  }

  componentDidUpdate(_oldProps: Props, newProps: Props): boolean {
    if (newProps.messages?.length > 0) {
      const messagesComponents = newProps.messages.map(
        (messageProps: Props) => new Message(messageProps),
      );
      this.children.MessagesList.setProps({
        messages: messagesComponents,
      });

      //Used setTimeout to emulate nextTick to be sure component is rendered
      setTimeout(
        () =>
          (this.children.MessagesList.element.scrollTop =
            this.children.MessagesList.element.scrollHeight),
      );
    } else {
      this.children.MessagesList.setProps({
        messages: [],
      });
    }

    return true;
  }
}

export default ChatTape;
