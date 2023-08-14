export const renderModalToDome = (modal: Element) => {
  const root = document.querySelector('#app');
  if (!root) {
    throw new Error('invalid query');
  }
  root.append(modal);
  return root;
};

export const removeModalFromDome = (modalDataId: string) => {
  const root = document.querySelector('body');
  const modalElement = document.querySelector(`[data-id="${modalDataId}"]`);
  if (!root) {
    throw new Error('invalid query');
  }
  modalElement?.remove();
  return root;
};
