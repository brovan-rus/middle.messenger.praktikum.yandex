import Block from './Block';
import { renderDom } from './renderDom';
import { rootContainer } from '../const/rootContainer';

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
