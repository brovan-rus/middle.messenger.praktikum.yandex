import { BaseApi } from './BaseApi';
import HTTP from '../../utils/HTTP';
import { Indexed } from '../../types/Indexed';
import { RegisterData } from '../../controllers/authController';
import { jsonHeader } from './addJosnHeader';

const authHttpInstance = new HTTP('auth', true);

class AuthApi extends BaseApi {
  createUser(userInformation: RegisterData) {
    return authHttpInstance.post('signup', {
      headers: jsonHeader,
      data: userInformation,
    });
  }

  login(credentials: Indexed) {
    return authHttpInstance.post('signin', {
      headers: jsonHeader,
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
