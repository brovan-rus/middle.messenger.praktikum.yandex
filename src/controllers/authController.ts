import authApi from '../sevices/api/AuthApi';
import Router from '../sevices/router/Router';
import { Path } from '../types/path';
import { setUserToStore } from '../sevices/store/Actions';
import { getAvatarPath } from '../utils/getAvatarPath';

export type RegisterData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  passwordRepeat?: string;
  phone: string;
};

export type LoginData = {
  login: string;
  password: string;
};
export const auth = async () => {
  const res = (await authApi.getUserInfo()) as XMLHttpRequest;
  if (res.status === 200) {
    console.log(JSON.parse(res.response));
    const user = JSON.parse(res.response);
    user.avatar = getAvatarPath(user.avatar);
    setUserToStore(user);

    // Router.navigate(Path.CHAT);
  } else {
    alert(JSON.parse(res.response).reason);
  }
};
export const login = async (data: LoginData) => {
  const res = (await authApi.login(data)) as XMLHttpRequest;
  if (res.status === 200) {
    console.log(res);
    await auth();
    Router.navigate(Path.CHAT);
  } else {
    alert(JSON.parse(res.response).reason);
  }
};
export const registerUser = async (data: RegisterData) => {
  const res = (await authApi.createUser(data)) as XMLHttpRequest;
  if (res.status === 200) {
    console.log(res);
    await login({ login: data.login, password: data.password });
  } else {
    alert(JSON.parse(res.response).reason);
  }
};
