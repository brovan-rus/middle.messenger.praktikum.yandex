import userApi from '../sevices/api/UserApi';
import { setUserToStore } from '../sevices/store/Actions';

export type ProfileData = {
  first_name: 'string';
  second_name: 'string';
  display_name: 'string';
  login: 'string';
  email: 'string';
  phone: 'string';
};

export type ChangePassword = {
  oldPassword: 'string';
  newPassword: 'string';
};

export const changeProfileInfo = async (data: ProfileData) => {
  const res = (await userApi.changeProfileInfo(data)) as XMLHttpRequest;
  if (res.status === 200) {
    console.log(JSON.parse(res.response));
    setUserToStore(JSON.parse(res.response));
  } else {
    alert(JSON.parse(res.response).reason);
  }
};

export const changeAvatar = async (data: FormData) => {
  const res = (await userApi.changeAvatar(data)) as XMLHttpRequest;
  if (res.status === 200) {
    console.log(JSON.parse(res.response));
    setUserToStore(JSON.parse(res.response));
  } else {
    alert(JSON.parse(res.response).reason);
  }
};

export const changePassword = async (data: ChangePassword) => {
  const res = (await userApi.changePassword(data)) as XMLHttpRequest;
  if (res.status === 200) {
    alert('Пароль изменен!');
  } else {
    alert(JSON.parse(res.response).reason);
  }
};
