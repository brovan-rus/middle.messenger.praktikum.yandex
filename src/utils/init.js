// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../const/router';

export default () => {
  // turn off default form submitting
  const searchForm = document.querySelector('#searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', e => {
      e.preventDefault();
    });
  }

  const profileEditForm = document.querySelector('#profileEditForm');
  if (profileEditForm)
    profileEditForm.addEventListener('submit', e => {
      e.preventDefault();
    });

  // back button function
  const backButton = document.querySelector('#backButton');
  if (backButton) {
    backButton.addEventListener('click', e => {
      e.preventDefault();
      window.history.back();
    });
  }

  // Login button function

  const loginButton = document.querySelector('#formButtonLogin');
  if (loginButton) {
    loginButton.addEventListener('click', e => {
      e.preventDefault();
      onNavigate('/chat');
    });
  }

  const registerButton = document.querySelector('#formButtonRegister');
  if (registerButton) {
    registerButton.addEventListener('click', e => {
      e.preventDefault();
      onNavigate('/chat');
    });
  }
};
