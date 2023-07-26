import { assertIsDefined } from './assertIsDefined';
import { collectFormData } from './collectFormData';
import { validate } from './validate';

export const addValidationEvents = (element: HTMLElement) => {
  return {
    focusout: () => {
      assertIsDefined(element);
      const formData = collectFormData(element);
      validate(formData);
    },
    submit: (e: Event) => {
      e.preventDefault();
      assertIsDefined(element);
      const formData = collectFormData(element);
      validate(formData);
      console.log(formData);
    },
  };
};
