import { Props } from '../types/props';
import Block from './Block';
import { assertIsDefined } from './assertIsDefined';
import { addValidationEvents } from './addValidationEvents';
import { ValidationData } from './validate';
import { FormData } from '../types/formData';

class Form extends Block {
  constructor(props: Props) {
    super('form', props);
    assertIsDefined(this.element);
    const validationEvents = addValidationEvents(
      this.element,
      this.showValidation.bind(this),
    );
    this.props.events = {
      ...this.props.events,
      ...validationEvents,
    };
  }

  showValidation(validationData: ValidationData, formData: FormData) {
    for (const field of this.children.fields) {
      if (validationData[field.props.name]) {
        field.setProps({
          ...field.props,
          validationError:
            validationData[field.props.name].length > 1
              ? // eslint-disable-next-line unicorn/no-array-reduce
                validationData[field.props.name].reduce(
                  (acc: string, message: string, i: number, arr: string[]) =>
                    (acc += i === arr.length - 1 ? message : `${message}, `),
                  '',
                )
              : validationData[field.props.name],
          value: formData[field.props.name],
        });
      } else {
        field.setProps({
          ...field.props,
          validationError: '',
          value: formData[field.props.name],
        });
      }
    }
  }
}

export default Form;
