import { Props } from '../../../types/props';
import Block from '../../../abstracts/Block';
import { assertIsDefined } from '../../../utils/assertIsDefined';
import { addFormEvents } from '../../../utils/addFormEvents';
import { ValidationData } from '../../../utils/validate';
import { FormData } from '../../../types/formData';
import { Indexed } from '../../../types/Indexed';

abstract class Form extends Block {
  constructor(props: Props) {
    super('form', props);
    assertIsDefined(this.element);
    const formEvents = addFormEvents(
      this.element,
      this.showValidation.bind(this),
      this.submit.bind(this),
    );
    this.props.events = {
      ...this.props.events,
      ...formEvents,
    };
  }

  submit(data: Indexed) {
    console.log(data);
    throw new Error('Not implemented');
  }

  private showValidation(validationData: ValidationData, formData: FormData) {
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
