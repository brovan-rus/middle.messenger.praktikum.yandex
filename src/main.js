import {
    renderPage,
    registerBrowserBackAndForward, onNavigate,
} from "./const/router.js";
import login from './pages/Login/Login.template';
import {props} from './const/props'
import Handlebars from 'handlebars';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');
    const loginTemplate = Handlebars.compile(login);
    root.innerHTML = loginTemplate(props.login);
    const currentPath = window.location.pathname;
    if (currentPath === '/') {
        onNavigate('/login', props['login'])
    } else {
        renderPage(currentPath, props[currentPath.slice(1)]);
    }
    registerBrowserBackAndForward();
});