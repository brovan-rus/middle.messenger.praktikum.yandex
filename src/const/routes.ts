import { Path } from '../types/path';
import Chat from '../pages/Chat/Chat';
import Error503 from '../pages/Error503/Error503';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import Error404 from '../pages/Error404/Error404';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile/EditProfile';
import EditPassword from '../pages/EidtPassword/EditPassword';
import Block from '../utils/Block';

type Route = { [key in Path]: Block };
export const routes: Route = {
  [Path.CHAT]: Chat,
  [Path.ERROR_503]: Error503,
  [Path.REGISTER]: Register,
  [Path.LOGIN]: Login,
  [Path.ERROR_404]: Error404,
  [Path.PROFILE]: Profile,
  [Path.EDIT_PROFILE]: EditProfile,
  [Path.EDIT_PASSWORD]: EditPassword,
};
