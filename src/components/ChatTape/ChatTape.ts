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

class ChatTape extends Block {
  contextMenu: TooltipMenu | undefined = undefined;

  constructor(props: Props) {
    super('section', props);
    assertIsDefined(this.element);
    const validationEvents = addFormEvents(
      this.element,
      this.showValidation.bind(this),
    );
    this.props.events = {
      ...this.props.events,
      ...validationEvents,
      click: (e: Event) => {
        const target = e.target as HTMLElement;
        if (target.dataset.action === 'openChatMenu') {
          if (!this.contextMenu) {
            this.contextMenu = new TooltipMenu({
              menuItems: [
                {
                  title: 'Добавить пользователя',
                  icon: `${plus}`,
                  action: () => {
                    console.log('add user to chat');
                  },
                },
                {
                  title: 'Удалить пользователя',
                  icon: `${iks}`,
                  action: () => {
                    console.log('delete user from chat');
                  },
                },
              ],
              targetElement: target,
            });
          }
          if (this.contextMenu.opened) {
            this.contextMenu.close();
          } else {
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

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      class: chatTapeStyles.container,
    };
    this.renewAttributes(attr);
  }
}

export default ChatTape;
