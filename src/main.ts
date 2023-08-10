import Router from './utils/Router';
import { routes } from './const/routes';
import { Route } from './utils/Route';

document.addEventListener('DOMContentLoaded', () => {
  for (const [path, page] of Object.entries(routes)) {
    Router.addRoute(new Route(path, page));
  }
  Router.enableRouting();
});
