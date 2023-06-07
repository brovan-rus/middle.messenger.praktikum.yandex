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
}