import authApi from '../sevices/api/AuthApi';
import { router } from '../sevices/router/Router';
import { Path } from '../types/path';
import { setUserToStore } from '../sevices/store/Actions';
import { getChatsList } from './chatController';
import { checkResponse } from './getDataFromResponse';

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
  try {
    setUserToStore(
      JSON.parse(
        checkResponse((await authApi.getUserInfo()) as XMLHttpRequest),
      ),
    );
  } catch (error) {
    setUserToStore({});
    console.log(error);
  }
};
export const login = async (data: LoginData) => {
  try {
    checkResponse((await authApi.login(data)) as XMLHttpRequest);
    await auth();
    router.navigate(Path.CHAT);
    await getChatsList();
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (data: RegisterData) => {
  try {
    checkResponse((await authApi.createUser(data)) as XMLHttpRequest);
    setUserToStore(data);
    router.navigate(Path.CHAT);
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    checkResponse((await authApi.logout()) as XMLHttpRequest);
    setUserToStore({});
    router.navigate(Path.LOGIN);
  } catch (error) {
    console.log(error);
  }
};
