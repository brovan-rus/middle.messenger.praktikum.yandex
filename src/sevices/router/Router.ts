import { Route } from './Route';
import { Path } from '../../types/path';
import { getUserFromStore } from '../store/Actions';

export class Router {
  private routes: Route[] = [];

  private readonly initialPath = '/';

  private readonly error404Path = '/error404';

  private readonly history: History;

  constructor() {
    this.history = window.history;
  }

  get userAuthorized() {
    return Object.entries(getUserFromStore()).length > 0;
  }

  get initialPagePath() {
    return this.userAuthorized ? Path.CHAT : Path.LOGIN;
  }

  public addRoute(route: Route) {
    this.routes.push(route);
  }

  public navigate(path: string) {
    this.history.pushState({}, '', path);
    this._findRoute(path)?.go();
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
    if (path === this.initialPath) {
      this.navigate(this.initialPagePath);
    } else {
      const route = this._findRoute(path);
      if (route?.path === this.error404Path) {
        this.history.pushState({}, '', this.error404Path);
      } else {
        this._findRoute(path)?.go();
      }
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
    } else if (foundRoute.isProtected && !this.userAuthorized) {
      this.navigate(this.initialPagePath);
      return;
    } else if (!foundRoute.isProtected && this.userAuthorized) {
      this.navigate(this.initialPagePath);
      return;
    }
    return foundRoute;
  }
}

export const router = new Router();
