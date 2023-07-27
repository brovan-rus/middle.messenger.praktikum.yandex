export const queryStringify = (data: Record<string, string>) => {
  if (!data || Object.entries(data).length === 0) {
    return '';
  }
  // eslint-disable-next-line unicorn/no-array-reduce
  return Object.entries(data).reduce(
    (prevValue, [currentKey, currentValue], index, arr) => {
      return (prevValue += `${currentKey}=${currentValue}${
        index === arr.length - 1 ? '' : '&'
      }`);
    },
    '?',
  );
};
