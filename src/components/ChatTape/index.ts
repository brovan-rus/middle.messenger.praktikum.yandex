import { getUserFromStore } from '../../sevices/store/Actions';
import { Connect } from '../../sevices/store';
import ChatTape from './ChatTape';

const getUserName = () => {
  const user = getUserFromStore();
  return user.first_name || user.second_name || user.login;
};

export default Connect(ChatTape, state => {
  return state.user ? { chatName: getUserName() } : {};
});
