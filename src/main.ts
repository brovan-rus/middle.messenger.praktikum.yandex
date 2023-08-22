import Router from './sevices/router/Router';
import { routes } from './const/routes';
import { Route } from './sevices/router/Route';
import { auth } from './controllers/authController';
import { getUserFromStore } from './sevices/store/Actions';
import { getChatsList } from './controllers/chatController';

document.addEventListener('DOMContentLoaded', async () => {
  await auth();

  if (Object.entries(getUserFromStore()).length > 0) {
    await getChatsList();
  }
  for (const route of routes) {
    Router.addRoute(new Route(route.path, route.page, route.isProtected));
  }
  Router.enableRouting();
});
