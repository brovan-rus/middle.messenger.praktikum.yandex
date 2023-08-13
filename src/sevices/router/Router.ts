import { Route } from './Route';
import { Path } from '../../types/path';
import { getUserFromStore } from '../store/Actions';

class Router {
  private routes: Route[] = [];

  private readonly initialPath = '/';

  private readonly error404Path = '/error404';

  private readonly history: History;

  constructor() {
    this.history = window.history;
  }

  public addRoute(route: Route) {
    this.routes.push(route);
  }

  public navigate(path: string) {
    this.history.pushState({}, path, window.location.origin + path);
    this._findRoute(path).go();
  }

  public enableRouting() {
    window.addEventListener('popstate', () => {
      this._onRoute(window.location.pathname);
    });

    this._onRoute(window.location.pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  private _onRoute(path: string) {
    const initialPagePath =
      Object.entries(getUserFromStore()).length > 0 ? Path.CHAT : Path.LOGIN;
    if (path === this.initialPath) {
      this.navigate(initialPagePath);
    } else {
      this._findRoute(path).go();
    }
  }

  private _findRoute(path: string) {
    const foundRoute = this.routes.find(route => route.path === path);
    if (!foundRoute) {
      const error404Route = this.routes.find(
        route => route.path === this.error404Path,
      );
      if (error404Route) {
        return error404Route;
      } else {
        throw new Error('Error 404 route not registered');
      }
    }
    return foundRoute;
  }
}

export default new Router();
