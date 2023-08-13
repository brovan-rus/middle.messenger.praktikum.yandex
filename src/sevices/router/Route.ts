import Block from '../../utils/Block';
import { renderDom } from '../../utils/renderDom';
import { rootContainer } from '../../const/rootContainer';

export class Route {
  public path: string;

  public page: Block;

  constructor(path: string, page: Block) {
    this.path = path;
    this.page = page;
  }

  public go() {
    renderDom(rootContainer, this.page);
  }
}
