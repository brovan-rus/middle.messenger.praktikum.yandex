import { BaseApi } from './BaseApi';
import HTTP from '../../utils/HTTP';
import { ChangePassword, ProfileData } from '../../controllers/userController';
import { jsonHeader } from './addJosnHeader';

const userHttpInstance = new HTTP('user', true);

class UserApi extends BaseApi {
  changeProfileInfo(profileInfo: ProfileData) {
    return userHttpInstance.put('profile', {
      headers: jsonHeader,
      data: profileInfo,
    });
  }

  changeAvatar(file: FormData) {
    return userHttpInstance.put('profile/avatar', {
      data: file,
    });
  }

  changePassword(password: ChangePassword) {
    return userHttpInstance.put('password', {
      headers: jsonHeader,
      data: password,
    });
  }

  search(login: string) {
    return userHttpInstance.post('search', {
      headers: jsonHeader,
      data: { login },
    });
  }
}

export default new UserApi();
