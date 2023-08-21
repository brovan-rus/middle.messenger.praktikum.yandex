import { staticBaseUrl } from '../const/api';

export const getAvatarPath = (avatar: string) => {
  if (!avatar) {
    return;
  }
  return avatar?.includes(staticBaseUrl) ? avatar : `${staticBaseUrl}${avatar}`;
};
