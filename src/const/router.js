import chat from '../templates/chat.hbs';
import register from '../templates/register.hbs';
import error from '../templates/error.hbs';
import login from '../templates/login.hbs';
import settings from '../templates/settings.hbs';

export const pages = {
    '/chat': chat,
    '/error': error,
    '/register': register,
    '/login': login,
    '/settings': settings,
};

export const onNavigate = (path) => {
    const template = pages[path];
    window.history.pushState(
        {}, path, window.location.origin + path
    );
    const root = document.querySelector('#app');
    root.innerHTML = template();
    enableNavigation();
}

export const enableNavigation = () => {
    const links = document.querySelectorAll('a');
    [...links].forEach((link) => {
        link.addEventListener('click', (event) => {
            const path = `/${event.currentTarget.id}`;
            event.preventDefault();
            onNavigate(path);
        })
    })
}