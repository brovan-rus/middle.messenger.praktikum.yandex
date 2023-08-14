import { BaseApi } from './BaseApi';
import HTTP from '../../utils/HTTP';
import { ChangePassword, ProfileData } from '../../controllers/userController';

const userHttpInstance = new HTTP('user', true);

class UserApi extends BaseApi {
  changeProfileInfo(profileInfo: ProfileData) {
    return userHttpInstance.put('profile', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
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
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      data: password,
    });
  }
}

export default new UserApi();
