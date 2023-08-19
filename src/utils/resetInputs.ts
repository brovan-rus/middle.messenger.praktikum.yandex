export const resetInputs = (element: HTMLElement): void => {
  const inputs = element.querySelectorAll('input');
  if (!inputs) {
    return;
  }
  for (const input of inputs) {
    input.value = '';
  }
};
