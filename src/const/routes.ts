import { Path } from '../types/path';
import Chat from '../pages/Chat/Chat';
import Error503 from '../pages/Error503/Error503';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import Error404 from '../pages/Error404/Error404';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile/EditProfile';
import EditPassword from '../pages/EidtPassword/EditPassword';

export const routes = [
  { path: Path.CHAT, page: Chat, isProtected: true },
  { path: Path.ERROR_503, page: Error503, isProtected: false },
  { path: Path.REGISTER, page: Register, isProtected: false },
  { path: Path.LOGIN, page: Login, isProtected: false },
  { path: Path.ERROR_404, page: Error404, isProtected: false },
  { path: Path.PROFILE, page: Profile, isProtected: true },
  { path: Path.EDIT_PROFILE, page: EditProfile, isProtected: true },
  { path: Path.EDIT_PASSWORD, page: EditPassword, isProtected: true },
];
