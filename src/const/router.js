import chat from '../pages/chat/chat.template';
import register from '../pages/regitster.template';
import error from '../pages/error.template';
import login from '../pages/login.template';
import profile from '../pages/profile/profile.template';
import {props} from "./props";
import Handlebars from "handlebars";
import {init} from "../utils/init";

const chatTemplate = Handlebars.compile(chat);
const registerTemplate = Handlebars.compile(register);
const errorTemplate = Handlebars.compile(error);
const loginTemplate = Handlebars.compile(login);
const profileTemplate = Handlebars.compile(profile);

export const pages = {
    '/chat': chatTemplate,
    '/error': errorTemplate,
    '/register': registerTemplate,
    '/login': loginTemplate,
    '/profile': profileTemplate,
};

export const renderPage = (path, context) => {
    const template = pages[path] || pages["/login"];
    const root = document.querySelector('#app');
    root.innerHTML = template(context);
    enableNavigation();
    init();
}

export const onNavigate = (path, context) => {
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

