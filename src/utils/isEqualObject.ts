import { isObject } from './isObject';
import { isEqualArray } from './isEqualArray';

export const isEqualObject = (
  a: Record<string, any>,
  b: Record<string, any>,
): boolean => {
  if (!a || !b) {
    return false;
  }
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (const key of Object.keys(a)) {
    const valuesIsArrays = Array.isArray(a[key]) && Array.isArray(b[key]);
    if (isObject(a[key]) && isObject(b[key])) {
      return isEqualObject(a[key], b[key]);
    }
    if (valuesIsArrays && !isEqualArray(a[key], b[key])) {
      return false;
    }
    if (!valuesIsArrays && a[key] !== b[key]) {
      return false;
    }
  }
  return true;
};
