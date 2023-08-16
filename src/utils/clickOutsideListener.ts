import { Callback } from '../types/callback';

export default class ClickOutsideListener {
  protected readonly target: HTMLElement[];

  protected readonly handler: Callback;

  constructor(targets: HTMLElement[], handler: Callback) {
    this.target = targets;
    this.handler = handler;
    this.checkOutsideClick = this.checkOutsideClick.bind(this);
  }

  registerListener() {
    document.addEventListener('click', this.checkOutsideClick);
  }

  unregisterListener() {
    document.removeEventListener('click', this.checkOutsideClick);
  }

  protected checkOutsideClick(e: Event) {
    if (this.target.every(target => target !== e.target)) {
      this.handler();
    }
  }
}
