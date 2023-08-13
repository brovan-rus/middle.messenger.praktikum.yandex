import { assertIsDefined } from './assertIsDefined';
import { collectFormData } from './collectFormData';
import { validate } from './validate';
import { Indexed } from '../types/Indexed';

export const addFormEvents = (
  element: HTMLElement,
  callback: (...args: Record<string, any>[]) => void,
  submit?: (...args: Indexed[]) => void,
) => {
  return {
    focusout: () => {
      assertIsDefined(element);
      const formData = collectFormData(element);
      callback(validate(formData), formData);
    },
    submit: (e: Event) => {
      e.preventDefault();
      assertIsDefined(element);
      const formData = collectFormData(element);
      const validationErrors = validate(formData);
      callback(validationErrors, formData);
      if (Object.entries(validationErrors).length === 0 && submit) {
        submit(formData);
      }
    },
  };
};
