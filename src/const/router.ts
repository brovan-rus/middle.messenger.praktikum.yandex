import Login from '../pages/Login';
import Error404 from '../pages/Error404/Error404';
import Register from '../pages/Register';
import Chat from '../pages/Chat/Chat';
import Profile from '../pages/Profile/Profile';
import { props } from './props';
import { Path } from '../types/path';
import { isObjectKey } from '../utils/isObjectKey';
import { isEnumValue } from '../utils/isEnumValue';
import Block from '../utils/Block';
import { renderDom } from '../utils/renderDom';
import EditProfile from '../pages/EditProfile/EditProfile';
import EditPassword from '../pages/EidtPassword/EditPassword';
import Error503 from '../pages/Error503/Error503';

type Page = { [key in Path]: Block };

export const pages: Page = {
  '/chat': Chat,
  '/error503': Error503,
  '/register': Register,
  '/login': Login,
  '/error404': Error404,
  '/profile': Profile,
  '/editProfile': EditProfile,
  '/editPassword': EditPassword,
};

export const renderPage = (path: Path) => {
  renderDom('#app', pages[path]);
};

export const onNavigate = (path: Path) => {
  const currentPage = path.slice(1);
  if (!isObjectKey(currentPage, props)) {
    return;
  }
  window.history.pushState({}, path, window.location.origin + path);
  renderPage(path);
};

export const registerBrowserBackAndForward = () => {
  window.addEventListener('popstate', () => {
    const currentPath = window.location.pathname;
    const pageName = currentPath.slice(1);
    if (!isEnumValue(currentPath, Path) || !isObjectKey(pageName, props)) {
      return;
    }
    renderPage(currentPath);
  });
};

export const enableRouting = () => {
  const currentPath = window.location.pathname;
  const validPageRoute = Object.keys(props).includes(currentPath.slice(1));
  const pageName = currentPath.slice(1);
  if (currentPath === '/') {
    onNavigate(Path.LOGIN);
  } else if (
    validPageRoute &&
    isEnumValue(currentPath, Path) &&
    isObjectKey(pageName, props)
  ) {
    renderPage(currentPath);
  } else {
    onNavigate(Path.ERROR_404);
  }
};
