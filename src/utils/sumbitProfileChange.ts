import { assertIsNonNullable } from './assertIsNonNullable';
import {
  changeAvatar,
  changeProfileInfo,
  ProfileData,
} from '../controllers/userController';

export const submitProfileChange = async (
  data: ProfileData,
  form?: HTMLFormElement,
) => {
  const avatarFileInput = form?.querySelector(
    '[name = "avatar"]',
  ) as HTMLInputElement;
  assertIsNonNullable(avatarFileInput.files);
  if (avatarFileInput.files[0]) {
    const formData = new FormData(form);
    await changeAvatar(formData);
  }
  await changeProfileInfo(data as ProfileData);
};
