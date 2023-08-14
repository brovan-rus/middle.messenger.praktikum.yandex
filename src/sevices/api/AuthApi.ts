import { BaseApi } from './BaseApi';
import HTTP from '../../utils/HTTP';
import { Indexed } from '../../types/Indexed';
import { RegisterData } from '../../controllers/authController';

const authHttpInstance = new HTTP('auth', true);

class AuthApi extends BaseApi {
  createUser(userInformation: RegisterData) {
    return authHttpInstance.post('signup', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      data: userInformation,
    });
  }

  login(credentials: Indexed) {
    return authHttpInstance.post('signin', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      data: credentials,
    });
  }

  getUserInfo() {
    return authHttpInstance.get('user', {});
  }

  logout() {
    return authHttpInstance.post('logout', {});
  }
}

export default new AuthApi();
