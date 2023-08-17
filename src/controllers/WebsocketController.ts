import { Callback } from '../types/callback';
import { webSocketUrl } from '../const/api';
import { Indexed } from '../types/Indexed';

export default class WebsocketController {
  private socket: undefined | WebSocket;

  private listeners: { listener: Callback; method: string }[];

  private path: string;

  constructor(path: string) {
    this.socket = undefined;
    this.listeners = [];
    this.path = path;
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
      for (const { listener, method } of this.listeners)
        if (this.socket) {
          (this.socket as WebSocket).addEventListener(method, listener);
        }
    }
    this.keepAlive(5000);
  }

  emit(method: Indexed, data: Indexed | undefined) {
    const message = `${JSON.stringify(method)} ${
      data ? `${JSON.stringify(data)}` : ''
    }`;
    this.socket?.send(message);
  }

  keepAlive(interval: number) {
    setInterval(() => {
      this.socket?.send(JSON.stringify({ type: 'ping' }));
    }, interval);
  }

  on(method: string, listener: Callback) {
    if (!this.socket) {
      this.listeners.push({ method, listener });
      return;
    }
    this.socket.addEventListener(method, listener);
  }

  isConnected(): boolean {
    return this.socket !== undefined && this.socket.readyState === 3;
  }

  disconnect() {
    console.log('disconnecting');
    if (!this.socket) return;
    for (const { listener, method } of this.listeners) {
      this.socket.removeEventListener(method, listener);
    }
    this.listeners = [];
    if (this.isConnected()) {
      this.socket.close(1000);
    }
    this.socket = undefined;
  }
}
