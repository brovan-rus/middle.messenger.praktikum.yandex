import {
    renderPage,
    registerBrowserBackAndForward
} from "./const/router.js";
import login from './pages/login.template';
import {props} from './const/props'
import Handlebars from 'handlebars';

document.addEventListener('DOMContentLoaded', () => {

    const root = document.querySelector('#app');
    const loginTemplate = Handlebars.compile(login);
    root.innerHTML = loginTemplate(props.login);
    const currentPath = window.location.pathname;
    renderPage(currentPath, props[currentPath.slice(1)]);
    registerBrowserBackAndForward();


    // turn off default form submitting
    const searchForm = document.querySelector('#searchForm');
    searchForm && searchForm.addEventListener('submit', (e) => {
        e.preventDefault()
    })


});