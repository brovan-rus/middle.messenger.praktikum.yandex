import Block from '../abstracts/Block';

export const renderModalToDome = (modal: Block) => {
  const root = document.querySelector('#app');
  if (!root) {
    throw new Error('invalid query');
  }
  root.append(modal.getContent());
  modal.dispatchComponentDidMount();
  return root;
};

export const removeModalFromDome = (modal: Block) => {
  console.log(modal);
  const modalDataId = modal.getContent().dataset.id;
  const root = document.querySelector('body');
  const modalElement = document.querySelector(`[data-id="${modalDataId}"]`);
  if (!root) {
    throw new Error('invalid query');
  }
  modal.dispatchComponentIsGoingToUnmount();
  modalElement?.remove();
  return root;
};
