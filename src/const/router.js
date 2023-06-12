import Chat from '../pages/Chat/Chat.template';
import Register from '../pages/Register/Regitster.template';
import Error from '../pages/Error.template';
import Login from '../pages/Login/Login.template';
import Profile from '../pages/Profile/Profile.template';
import EditProfile from "../pages/EditProfile/EditProfile.template";
import {props} from "./props";
import Handlebars from "handlebars";
import {init} from "../utils/init";
import EditPassword from "../pages/EidtPassword/EditPassword.template";

const chatTemplate = Handlebars.compile(Chat);
const registerTemplate = Handlebars.compile(Register);
const errorTemplate = Handlebars.compile(Error);
const loginTemplate = Handlebars.compile(Login);
const profileTemplate = Handlebars.compile(Profile);
const editProfileTemplate = Handlebars.compile(EditProfile);
const editPasswordTemplate = Handlebars.compile(EditPassword);

export const pages = {
    '/chat': chatTemplate,
    '/error': errorTemplate,
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

