import {
    registerBrowserBackAndForward, enableRouting,
} from "./const/router.js";
import login from './pages/Login/Login.template';
import {props} from './const/props'
import Handlebars from 'handlebars';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');
    const loginTemplate = Handlebars.compile(login);
    root.innerHTML = loginTemplate(props.login);
    enableRouting();
    registerBrowserBackAndForward();
});