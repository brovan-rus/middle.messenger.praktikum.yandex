import Handlebars from 'handlebars';
import Login from '../pages/Login';
import Error404 from '../pages/Error404/Error404';
import Register from '../pages/Register';
import Chat from '../pages/Chat/Chat.template';
import Profile from '../pages/Profile/Profile.template';
import EditProfile from '../pages/EditProfile/EditProfile.template';
import { props } from './props';
// eslint-disable-next-line import/no-cycle
import init from '../utils/init';
import EditPassword from '../pages/EidtPassword/EditPassword.template';
import Error503 from '../pages/Error503/Error503.template';
import { Path } from '../types/path';
import { PageContext } from '../types/contexts';
import { isObjectKey } from '../utils/isObjectKey';
import { isEnumValue } from '../utils/isEnumValue';
import Block from '../utils/Block';
import { renderDom } from '../utils/renderDom';

// const chatTemplate = Handlebars.compile(Chat);
// const registerTemplate = Handlebars.compile(Register);
// const error404Template = Handlebars.compile(Error404);
// const error503Template = Handlebars.compile(Error503);
// const loginTemplate = Handlebars.compile(Login);
// const profileTemplate = Handlebars.compile(Profile);
// const editProfileTemplate = Handlebars.compile(EditProfile);
// const editPasswordTemplate = Handlebars.compile(EditPassword);

type Page = { [key in Path]: Block };

export const pages: Page = {
  // '/chat': chatTemplate,
  // '/error404': error404Template,
  // '/error503': error503Template,
  '/register': Register,
  '/login': Login,
  '/error404': Error404,
  // '/profile': profileTemplate,
  // '/editProfile': editProfileTemplate,
  // '/editPassword': editPasswordTemplate,
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

export const enableNavigation = () => {
  const links = document.querySelectorAll('a');
  for (const link of links) {
    link.addEventListener('click', (event: MouseEvent) => {
      const currentTarget = event.currentTarget as HTMLElement;
      const pageName = currentTarget.id;
      const path = `/${pageName}`;
      event.preventDefault();
      if (!isObjectKey(pageName, props) || !isEnumValue(path, Path)) {
        return;
      }
      onNavigate(path);
    });
  }
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
