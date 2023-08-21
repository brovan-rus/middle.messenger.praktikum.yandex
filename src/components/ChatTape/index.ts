import { getActiveChatFromStore } from '../../sevices/store/Actions';
import { Connect } from '../../sevices/store';
import ChatTape from './ChatTape';
import { getAvatarPath } from '../../utils/getAvatarPath';

export default Connect(ChatTape, state => {
  const activeChat = getActiveChatFromStore();
  return {
    chatName: activeChat?.title,
    avatar: getAvatarPath(activeChat?.avatar),
    messages: state.messages,
  };
});
