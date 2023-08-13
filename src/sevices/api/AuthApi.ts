import { BaseApi } from './BaseApi';
import HTTP from '../../utils/HTTP';
import { Indexed } from '../../types/Indexed';
import { RegisterData } from '../../controllers/authController';

const userHttpInstance = new HTTP('auth', true);

// const userHttpInstancWithCreds = new HTTP('auth', true);

class AuthApi extends BaseApi {
  createUser(userInformation: RegisterData) {
    return userHttpInstance.post('signup', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      data: userInformation,
    });
  }

  login(credentials: Indexed) {
    return userHttpInstance.post('signin', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      data: credentials,
    });
  }

  getUserInfo() {
    return userHttpInstance.get('user', {});
  }
}

export default new AuthApi();
