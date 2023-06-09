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

