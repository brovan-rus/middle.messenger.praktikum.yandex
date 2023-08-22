const trim = (str: string, chars = ' ') => {
  if (!chars || chars === ' ') {
    return str.trim();
  }

  let result = '';
  const charsWithSpace = chars + ' ';
  const checkString = (direct = true) => {
    if (direct) {
      for (let i = 0; i < str.length; i += 1) {
        if (!charsWithSpace.includes([...str][i])) {
          result = str.slice(i);
          checkString(false);
          break;
        }
      }
    } else {
      for (let i = str.length - 1; i > 0; i -= 1) {
        if (!charsWithSpace.includes([...str][i])) {
          result = result.slice(0, str.length - 1 - i);
          break;
        }
      }
    }
  };
  checkString();
  return result;
};

export default trim;
