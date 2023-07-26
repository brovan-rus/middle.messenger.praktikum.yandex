import { FormData } from '../types/formData';

const formData: FormData = {};

export const collectFormData = (element: HTMLElement): FormData => {
  const inputs = element.querySelectorAll('input');
  if (!inputs) {
    return formData;
  }
  for (const input of inputs) {
    formData[input.name] = input.value;
  }
  return formData;
};
