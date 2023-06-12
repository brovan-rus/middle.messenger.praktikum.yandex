import Chat from '../pages/Chat/Chat.template';
import Register from '../pages/Register/Regitster.template';
import Error404 from '../pages/Error404/Error404.template'
import Login from '../pages/Login/Login.template';
import Profile from '../pages/Profile/Profile.template';
import EditProfile from "../pages/EditProfile/EditProfile.template";
import {props} from "./props";
import Handlebars from "handlebars";
import {init} from "../utils/init";
import EditPassword from "../pages/EidtPassword/EditPassword.template";
import Error503 from '../pages/Error503/Error503.template';

const chatTemplate = Handlebars.compile(Chat);
const registerTemplate = Handlebars.compile(Register);
const error404Template = Handlebars.compile(Error404);
const error503Template = Handlebars.compile(Error503);
const loginTemplate = Handlebars.compile(Login);
const profileTemplate = Handlebars.compile(Profile);
const editProfileTemplate = Handlebars.compile(EditProfile);
const editPasswordTemplate = Handlebars.compile(EditPassword);

export const pages = {
    '/chat': chatTemplate,
    '/error404': error404Template,
    '/error503': error503Template,
    '/register': registerTemplate,
    '/login': loginTemplate,
    '/profile': profileTemplate,
    '/editProfile': editProfileTemplate,
    '/editPassword': editPasswordTemplate
};

export const renderPage = (path, context) => {
    const template = pages[path];
    const root = document.querySelector('#app');
    root.innerHTML = template(context);
    enableNavigation();
    init();
}

export const onNavigate = (path, context = props[path.slice(1)]) => {
    window.history.pushState(
        {}, path, window.location.origin + path
    );
    renderPage(path, context);
}

export const registerBrowserBackAndForward = () => {
    window.onpopstate = function () {
        const currentPath = window.location.pathname;
        renderPage(currentPath, props[currentPath.slice(1)]);
    };
};

export const enableNavigation = () => {
    const links = document.querySelectorAll('a');
    [...links].forEach((link) => {
        link.addEventListener('click', (event) => {
            const pageName = event.currentTarget.id;
            const path = `/${pageName}`;
            event.preventDefault();
            onNavigate(path, props[pageName]);
        })
    });
};

export const enableRouting = () => {
    const currentPath = window.location.pathname;
    const validPageRoute = Object.keys(props).some((page) => page === currentPath.slice(1));
    if (currentPath === '/') {
        onNavigate('/login', props['login'])
    } else if (validPageRoute) {
        renderPage(currentPath, props[currentPath.slice(1)]);
    } else {
        onNavigate('/error404', props['error404'])
    }
}
