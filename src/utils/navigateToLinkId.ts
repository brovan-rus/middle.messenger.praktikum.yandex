import { isObjectKey } from './isObjectKey';
import { props } from '../const/props';
import { isEnumValue } from './isEnumValue';
import { Path } from '../types/path';
import { onNavigate } from '../const/router';

export const navigateToLinkId = (e: Event) => {
  const target = e.target as HTMLElement;
  if (target.tagName.toLowerCase() === 'a') {
    const pageName = target.id;
    const path = `/${pageName}`;
    e.preventDefault();
    if (!isObjectKey(pageName, props) || !isEnumValue(path, Path)) {
      return;
    }
    onNavigate(path);
  }
};
