import { isObject } from './isObject';

function cloneArray(value: any[]): any[] {
  let newArray: any[] = [];
  if (value && value.length > 0) {
    newArray = [];
    for (const [i, element] of value.entries()) {
      if (isObject(element)) {
        newArray[i] = Array.isArray(element)
          ? cloneArray(element)
          : // eslint-disable-next-line @typescript-eslint/no-use-before-define
            cloneObject(element);
      } else {
        newArray[i] = element;
      }
    }
  }
  return newArray;
}

function cloneObject(object: object) {
  const clonedObject: Record<string, any> = {};
  for (const [key, value] of Object.entries(object)) {
    if (Array.isArray(value)) {
      clonedObject[key] = cloneArray(value);
    }
    clonedObject[key] = isObject(value) ? cloneObject(value) : value;
  }
  return clonedObject;
}

export function cloneDeep<T extends object = object>(obj: T) {
  if (Array.isArray(obj)) {
    return cloneArray(obj);
  }

  if (isObject(obj)) {
    return cloneObject(obj);
  }
  throw new Error('Argument have to be object or array of objects');
}
