import { Callback } from '../types/callback';
import { webSocketUrl } from '../const/api';

type Listener = (event: MessageEvent) => void;
export default class WebsocketController {
  private socket: undefined | WebSocket;

  private listeners: Listener[];

  private path: string;

  private messagesStack: string[] = [];

  constructor(path: string) {
    this.socket = undefined;
    this.listeners = [];
    this.path = path;
  }

  get isConnected(): boolean {
    return this.socket !== undefined && this.socket.readyState === 1;
  }

  async connect(url = webSocketUrl, path = this.path) {
    if (!this.socket) {
      const connectToSocket = new Promise((resolve, reject) => {
        this.socket = new WebSocket(`${url}/${path}`);
        this.socket.addEventListener('open', () => {
          console.log('connected');
          resolve(this.socket);
        });
        // eslint-disable-next-line unicorn/prefer-add-event-listener
        this.socket.onerror = (error: Event) => reject(error);
      });
      await connectToSocket;
      for (const listener of this.listeners)
        if (this.socket) {
          (this.socket as WebSocket).addEventListener('message', listener);
        }
      if (this.messagesStack.length > 0 && this.socket) {
        for (const message of this.messagesStack) {
          (this.socket as WebSocket).send(message);
        }
        this.messagesStack = [];
      }
    }
    this.keepAlive(5000);
  }

  emit(method: string, data = '') {
    const message = `{"type":"${method}"${
      data ? `,"content":"${data}"}` : '}'
    }`;
    if (this.isConnected) {
      this.socket?.send(message);
    } else {
      this.messagesStack.push(message);
    }
  }

  keepAlive(interval: number) {
    setInterval(() => {
      this.emit('ping');
    }, interval);
  }

  on(method: string, listener: Callback) {
    const eventListener = (event: MessageEvent) => {
      const { type } = JSON.parse(event.data);
      if (type === method) {
        listener(JSON.parse(event.data));
      } else if (method === '') {
        listener(JSON.parse(event.data));
      }
    };

    if (!this.socket) {
      this.listeners.push(eventListener);
      return;
    }
    this.socket.addEventListener('message', eventListener);
    this.listeners.push(eventListener);
  }

  removeAllListeners() {
    for (const listener of this.listeners) {
      this?.socket?.removeEventListener('message', listener);
    }
    this.listeners = [];
  }

  disconnect() {
    console.log('disconnecting');
    if (!this.socket) return;
    this.removeAllListeners();
    if (this.isConnected) {
      this.socket.close(1000);
    }
    this.socket = undefined;
  }
}
