import { assertIsDefined } from './assertIsDefined';
import { collectFormData } from './collectFormData';
import { validate } from './validate';

export const addValidationEvents = (
  element: HTMLElement,
  callback: (...args: Record<string, any>[]) => void,
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
      console.log(formData);
      callback(validate(formData), formData);
    },
  };
};
