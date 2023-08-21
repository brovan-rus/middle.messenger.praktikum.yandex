export const isEqualArray = (arr1: unknown[], arr2: unknown[]) =>
  arr1.every((value, i) => arr2[i] === value);
