import {onNavigate} from "../const/router";

export const init = () => {
    // turn off default form submitting
    const searchForm = document.querySelector('#searchForm');
    searchForm && searchForm.addEventListener('submit', (e) => {
        e.preventDefault()
    });

    const profileEditForm = document.querySelector('#profileEditForm');
    profileEditForm && profileEditForm.addEventListener('submit', (e) => {
        e.preventDefault()
    });


//back button function
    const backButton = document.querySelector('#backButton');
    backButton && backButton.addEventListener('click', (e) => {
        e.preventDefault();
        history.back();
    });

    //Login button function

    const loginButton = document.querySelector('#formButtonLogin');
    loginButton && loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/chat')
    });

    const registerButton = document.querySelector('#formButtonRegister');
    registerButton && registerButton.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/chat')
    });
}


