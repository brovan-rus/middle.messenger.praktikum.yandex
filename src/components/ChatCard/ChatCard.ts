import Block from '../../utils/Block';
import template from './ChatCard.template';
import { Props } from '../../types/props';

class ChatCard extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }

  // componentDidMount() {
  //   const attr = {
  //     id: 'searchForm',
  //     class: chatCardStyles.searchForm,
  //   };
  //   this.renewAttributes(attr);
  // }
}

export default ChatCard;
