export type Indexed<T = object | unknown> = {
  [key in string]: T;
};
