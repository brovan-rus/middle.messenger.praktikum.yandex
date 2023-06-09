import {enableNavigation, renderPage} from "./const/router.js";
import login from './templates/login.hbs';
import {props} from './const/props'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');
    root.innerHTML = login(props.login);
    const currentPath = window.location.pathname;
    renderPage(currentPath, props[currentPath.slice(1)]);
    enableNavigation();
});