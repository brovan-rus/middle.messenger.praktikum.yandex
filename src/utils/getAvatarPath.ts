import { staticBaseUrl } from '../const/api';

export const getAvatarPath = (avatar: string) => `${staticBaseUrl}${avatar}`;
