import {
    renderPage,
    registerBrowserBackAndForward
} from "./const/router.js";
import login from './pages/login.hbs';
import {props} from './const/props'
import Handlebars from 'handlebars/runtime';
import card from './components/ChatCard/ChatCard.hbs'

document.addEventListener('DOMContentLoaded', () => {
    Handlebars.registerPartial('card', card);
    console.log(Handlebars.partials)
    const root = document.querySelector('#app');
    root.innerHTML = login(props.login);
    const currentPath = window.location.pathname;
    renderPage(currentPath, props[currentPath.slice(1)]);
    registerBrowserBackAndForward();


    // turn off default form submitting
    const searchForm = document.querySelector('#searchForm');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault()
    })


});