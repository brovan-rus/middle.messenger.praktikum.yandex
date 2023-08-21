import set from '../../utils/set';
import EventBus from '../../utils/EventBus';
import { Props } from '../../types/props';

export const enum StoreEvents {
  Updated = 'updated',
}

class Store extends EventBus {
  private state: Props = {};

  public getState(): Props {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
