import {pages, onNavigate, enableNavigation} from "./const/router.js";
import login from './templates/login.hbs';

document.addEventListener('DOMContentLoaded', () => {
    console.log('here');
    const root = document.querySelector('#app');
    root.innerHTML = login();
    enableNavigation();
});