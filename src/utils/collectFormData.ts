import { FormData } from '../types/formData';

export const collectFormData = (element: HTMLElement): FormData => {
  const formData: FormData = {};

  const inputs = element.querySelectorAll('input');
  if (!inputs) {
    return formData;
  }
  for (const input of inputs) {
    formData[input.name] = input.value;
  }
  return formData;
};
