import { isObject } from './isObject';
import { Indexed } from '../types/Indexed';

export const merge = (lhs: Indexed, rhs: Indexed): Indexed => {
  const result: Indexed = {};

  const mergeValues = (object: Indexed, target = result) => {
    for (const [key, value] of Object.entries(object)) {
      if (isObject(value)) {
        if (!target[key]) {
          target[key] = {};
        }
        mergeValues(value as Indexed, target[key] as Indexed);
      } else {
        target[key] = value;
      }
    }
  };

  mergeValues(lhs);
  mergeValues(rhs);

  return result;
};
