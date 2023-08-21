import Block from '../../utils/Block';
import { renderDom } from '../../utils/renderDom';
import { rootContainer } from '../../const/rootContainer';

export class Route {
  public path: string;

  public page: Block;

  public isProtected: boolean;

  constructor(path: string, page: Block, isProtected = false) {
    this.path = path;
    this.page = page;
    this.isProtected = isProtected;
  }

  public go() {
    renderDom(rootContainer, this.page);
  }
}
