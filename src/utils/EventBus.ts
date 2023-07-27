import { Callback } from '../types/callback';

type Listeners = {
  [key: string]: Callback[];
};

export class EventBus {
  private readonly listeners: Listeners;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: Callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event: string, callback: Callback) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      element => element !== callback,
    );
  }

  emit(event: string, ...args: object[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    for (const listener of this.listeners[event]) listener(...args);
  }
}

export default EventBus;
