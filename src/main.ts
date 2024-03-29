import { router } from './sevices/router/Router';
import { routes } from './const/routes';
import { Route } from './sevices/router/Route';
import { auth } from './controllers/authController';
import { getUserFromStore } from './sevices/store/Actions';
import { getChatsList } from './controllers/chatController';
import Block from './abstracts/Block';

document.addEventListener('DOMContentLoaded', async () => {
  await auth();

  if (Object.entries(getUserFromStore()).length > 0) {
    await getChatsList();
  }
  for (const route of routes) {
    router.addRoute(
      new Route(route.path, route.page as Block, route.isProtected),
    );
  }
  router.enableRouting();
});
