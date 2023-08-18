import Block from '../../utils/Block';
import template from './Message.template';
import { Props } from '../../types/props';
import messageStyles from './Message.module.css';
import { getFormattedTime } from '../../utils/getFormattedTime';
import { getUserFromStore } from '../../sevices/store/Actions';

class Message extends Block {
  constructor(props: Props) {
    super('li', props);
    this.props.time = getFormattedTime(this.props.time);
    this.props.sentByAuthor = getUserFromStore().id === this.props.user_id;
  }

  render() {
    return this.compile(template, this.props);
  }

  getAttr(props: Props) {
    return {
      class: `
          ${messageStyles.container}
          ${props.sentByAuthor ? messageStyles.containerHighlighted : ''}`,
    };
  }

  componentDidMount() {
    this.renewAttributes(this.getAttr(this.props));
  }

  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    const attrRenewed = oldProps.sentByAuthor !== newProps.sentByAuthor;
    if (attrRenewed) {
      this.renewAttributes(this.getAttr(newProps));
    }
    return true;
  }
}

export default Message;
