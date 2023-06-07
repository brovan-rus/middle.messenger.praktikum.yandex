import {pages} from "./const/router.js";

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');
    const path = window.location.pathname;
    console.log(path);
    root.innerHTML = path === '/' ? pages['/login']() : pages[path]();
});