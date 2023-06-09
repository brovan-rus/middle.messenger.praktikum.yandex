import {pages, onNavigate, enableNavigation} from "./const/router.js";
import login from './templates/login.hbs';
import {props} from '../src/const/props'

document.addEventListener('DOMContentLoaded', () => {
    console.log('here');
    const root = document.querySelector('#app');
    // root.style = styles;
    // document.head.appendChild(styles);
    console.log(props.login);
    root.innerHTML = login(props.login);
    console.log(root);
    enableNavigation();
});