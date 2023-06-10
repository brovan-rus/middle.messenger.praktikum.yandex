import chat from '../pages/chat/chat.template';
import register from '../pages/regitster.template';
import error from '../pages/error.template';
import login from '../pages/login.template';
import settings from '../pages/profile.template';
import {props} from "./props";
import Handlebars from "handlebars";

const chatTemplate = Handlebars.compile(chat);
const registerTemplate = Handlebars.compile(register);
const errorTemplate = Handlebars.compile(error);
const loginTemplate = Handlebars.compile(login);
const settingsTemplate = Handlebars.compile(settings);

export const pages = {
    '/chat': chatTemplate,
    '/error': errorTemplate,
    '/register': registerTemplate,
    '/login': loginTemplate,
    '/settings': settingsTemplate,
};

export const renderPage = (path, context) => {
    const template = pages[path] || pages["/login"];
    const root = document.querySelector('#app');
    root.innerHTML = template(context);
    enableNavigation();
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
    const buttons = document.querySelectorAll('button');
    [...links, ...buttons].forEach((link) => {
        link.addEventListener('click', (event) => {
            const pageName = event.currentTarget.id;
            const path = `/${pageName}`;
            event.preventDefault();
            onNavigate(path, props[pageName]);
        })
    });
};

