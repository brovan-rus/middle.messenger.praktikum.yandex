import Block from '../../utils/Block';
import template from './ChatList.template';
import { Props } from '../../types/props';
import chatListStyles from './ChatList.module.css';

class ChatList extends Block {
  constructor(props: Props) {
    console.log(props);
    super('section', props);
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      class: chatListStyles.container,
    };
    this.renewAttributes(attr);
  }

  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    console.log('chat list update');
    // for (const card of newProps.cards) {
    //   const currentChild = this.children.cards?.find((child: ProfileField) => {
    //     return child.props.name === field.name;
    //   });
    //   this.props.value = newProps.fieldValue;
    //   currentChild?.setProps({
    //     ...field,
    //     styles: fromInputStyles,
    //     placeholder: '',
    //     value: field.fieldValue,
    //   });
    // }
    // return true;
    console.log(newProps);
    console.log(newProps.cards);

    return true;
  }
}

export default ChatList;
