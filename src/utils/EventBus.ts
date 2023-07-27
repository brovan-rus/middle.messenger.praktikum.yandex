import { Callback } from '../types/callback';

type Listeners = {
  [key: string]: Callback[];
};

type RegisterEvent = (event: string, callback: Callback) => void;

export class EventBus {
  private readonly listeners: Listeners;

  constructor() {
    this.listeners = {};
  }

  on: RegisterEvent = (event, callback) => {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  };

  off: RegisterEvent = (event, callback) => {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      element => element !== callback,
    );
  };

  emit(event: string, ...args: object[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    for (const listener of this.listeners[event]) listener(...args);
  }
}

export default EventBus;
