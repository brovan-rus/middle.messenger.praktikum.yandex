import { isObject } from './isObject';
import { Indexed } from '../types/Indexed';

const set = (
  object: Indexed & unknown,
  path: string,
  value: unknown,
): Indexed | unknown => {
  if (!isObject(object)) {
    return object;
  }

  const keys = path.split('.');

  const handleLayers = (target: Indexed, layer: number) => {
    const key = keys[layer];
    if (layer === keys.length - 1) {
      target[key] = value;
      return;
    }
    if (!target[key]) {
      target[key] = {};
    }
    layer += 1;
    handleLayers(target[key] as Indexed, layer);
  };

  handleLayers(object, 0);
  return object;
};

export default set;

/**
 * set({ foo: 5 }, 'bar.baz', 10); // { foo: 5, bar: { baz: 10 } }
 * set(3, 'foo.bar', 'baz'); // 3
 */
