import store, { StoreEvents } from '../store/Store';
import { Props } from '../../types/props';

const connect = (Component: any, mapStateToProps: (arg: Props) => Props) => {
  return class extends Component {
    constructor(props = {}, tagName = 'div') {
      const renewedProps = mapStateToProps(store.getState());
      super(tagName, { ...renewedProps, ...props });
      store.on(StoreEvents.Updated, () => {
        this.setProps(mapStateToProps(store.getState()));
      });
    }
  };
};

export default connect;
