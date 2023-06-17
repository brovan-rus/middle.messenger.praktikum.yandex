import Handlebars from 'handlebars';
import { enableRouting, registerBrowserBackAndForward } from './const/router';
import login from './pages/Login/Login.template';
import props from './const/props';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app');
  const loginTemplate = Handlebars.compile(login);
  root.innerHTML = loginTemplate(props.login);
  enableRouting();
  registerBrowserBackAndForward();
});
