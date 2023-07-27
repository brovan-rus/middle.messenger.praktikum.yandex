import { enableRouting, registerBrowserBackAndForward } from './const/router';

document.addEventListener('DOMContentLoaded', () => {
  enableRouting();
  registerBrowserBackAndForward();
});
