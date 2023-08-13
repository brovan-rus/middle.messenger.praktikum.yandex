import Router from './sevices/router/Router';
import { routes } from './const/routes';
import { Route } from './sevices/router/Route';
import { auth } from './controllers/authController';

document.addEventListener('DOMContentLoaded', async () => {
  await auth();
  for (const [path, page] of Object.entries(routes)) {
    Router.addRoute(new Route(path, page));
  }
  Router.enableRouting();
});
