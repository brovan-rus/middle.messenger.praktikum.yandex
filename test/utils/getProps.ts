import { Props } from '../../src/types/props';

const getProps = (testProps?: Props) => {
  return testProps ?? { text: 'some text' };
};

export default getProps;
