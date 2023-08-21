import Router from '../sevices/router/Router';

export const navigateToLinkId = (e: Event) => {
  e.preventDefault();
  const target = e.target as Element;
  const tag = target.tagName.toLowerCase();
  if (tag === 'a') {
    Router.navigate(`/${target.id}`);
  }
};
