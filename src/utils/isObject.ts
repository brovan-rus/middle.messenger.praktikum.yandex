export const isObject = (variable: unknown) =>
  typeof variable === 'object' && !Array.isArray(variable) && variable !== null;
