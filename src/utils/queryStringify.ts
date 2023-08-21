import { isObject } from './isObject';

const isObjectOrArray = (
  data: Record<string, any> | any[] | undefined,
): boolean => isObject(data) || Array.isArray(data);

export const queryStringify = (data?: Record<string, any>): string => {
  if (!data || Object.entries(data).length === 0) {
    return '';
  }

  const keys: string[] = [];
  let currentKey = '';

  const handleObject = (key: string, obj: Record<string, any>, root = true) => {
    if (root) {
      currentKey = key;
    } else {
      currentKey += `[${key}]`;
    }
    for (const [subKey, value] of Object.entries(obj)) {
      if (isObjectOrArray(value)) {
        handleObject(subKey, value, false);
      } else {
        keys.push(`${currentKey}[${subKey}]=${value}`);
      }
    }
  };

  for (const [key, value] of Object.entries(data)) {
    console.log([key, value]);
    if (isObjectOrArray(value)) {
      handleObject(key, value);
    } else {
      keys.push(`${key}=${value}`);
    }
  }

  return keys.join('&');
};
