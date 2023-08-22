import userApi from '../sevices/api/UserApi';
import { setUserToStore } from '../sevices/store/Actions';
import { Indexed } from '../types/Indexed';
import { checkResponse } from './getDataFromResponse';

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
  try {
    const res = (await userApi.changeProfileInfo(data)) as XMLHttpRequest;
    setUserToStore(JSON.parse(checkResponse(res)));
  } catch (error) {
    console.log(error);
  }
};

export const changeAvatar = async (data: FormData) => {
  try {
    const res = (await userApi.changeAvatar(data)) as XMLHttpRequest;
    setUserToStore(JSON.parse(checkResponse(res)));
  } catch (error) {
    console.log(error);
  }
};

export const changePassword = async (data: ChangePassword) => {
  try {
    const res = (await userApi.changePassword(data)) as XMLHttpRequest;
    checkResponse(res);
    alert('Password changed');
  } catch (error) {
    console.log(error);
  }
};

export const findIdByLogin = async (login: string) => {
  try {
    const res = (await userApi.search(login)) as XMLHttpRequest;
    return JSON.parse(checkResponse(res)).find(
      (item: Indexed) => item.login === login,
    );
  } catch (error) {
    console.log(error);
  }
};
