import store, { StoreEvents } from '../store/Store';
import { Props } from '../../types/props';

const connect = (
  Component: any,
  mapStateToProps: (arg: Props) => Props,
): any => {
  return class extends Component {
    constructor(tagName = 'div', props = {}) {
      const renewedProps = mapStateToProps(store.getState());
      super(tagName, { ...props, ...renewedProps });
      store.on(StoreEvents.Updated, () => {
        this.setProps(mapStateToProps(store.getState()));
      });
    }
  };
};

export default connect;
