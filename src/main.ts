import Router from './sevices/router/Router';
import { routes } from './const/routes';
import { Route } from './sevices/router/Route';
import { auth } from './controllers/authController';
import { getUserFromStore } from './sevices/store/Actions';
import { getChatsList } from './controllers/chatController';

document.addEventListener('DOMContentLoaded', async () => {
  await auth();
  if (getUserFromStore()) {
    await getChatsList();
  }
  for (const [path, page] of Object.entries(routes)) {
    Router.addRoute(new Route(path, page));
  }
  Router.enableRouting();
});
