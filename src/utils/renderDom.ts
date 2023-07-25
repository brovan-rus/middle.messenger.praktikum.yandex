import Block from './Block';

export const renderDom = (query: string, block: Block) => {
  const root = document.querySelector(query);
  if (!root) {
    throw new Error('invalid query');
  }
  root.innerHTML = '';
  root.append(block.getContent());
  block.dispatchComponentDidMount();
  return root;
};
