import chat from '../templates/chat.hbs';
import register from '../templates/register.hbs';
import error from '../templates/error.hbs';
import login from '../templates/login.hbs';
import settings from '../templates/settings.hbs';
import {props} from "./props";

export const pages = {
    '/chat': chat,
    '/error': error,
    '/register': register,
    '/login': login,
    '/settings': settings,
};

export const renderPage = (path, context) => {
    const template = pages[path] || pages["/login"];
    window.history.pushState(
        {}, path, window.location.origin + path
    );
    const root = document.querySelector('#app');
    root.innerHTML = template(context);
}

export const onNavigate = (path, context) => {
    renderPage(path, context);
    enableNavigation();
}

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
}