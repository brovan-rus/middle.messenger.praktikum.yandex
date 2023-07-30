export const isObjectKey = <T extends { [k: string]: any }>(
  something: any,
  object: T,
): something is keyof T =>
  typeof something === 'string' && Object.keys(object).includes(something);
