import Block from '../../utils/Block';
import styles from './Modal.module.css';
import { removeModalFromDome, renderModalToDome } from '../../utils/modal';
import { assertIsDefined } from '../../utils/assertIsDefined';
import { assertIsNonNullable } from '../../utils/assertIsNonNullable';

class Modal extends Block {
  constructor(Component: Block) {
    super('div', {
      [Component.constructor.name]: Component,
      styles,
    });

    this.props.events = {
      click: (e: Event) => {
        if (e.target === e.currentTarget) {
          this.close();
        }
        if ((e.target as Element).id === 'closeButton') {
          this.close();
        }
      },
    };
  }

  componentDidMount() {
    const attr = {
      class: styles.container,
    };
    this.renewAttributes(attr);
  }

  render() {
    const template = `
            <div class="{{styles.content}}">
            <button id="closeButton" class="{{styles.closeButton}}"></button>
                {{{${Object.keys(this.children)[0]}}}}
           </div>
        `;

    return this.compile(template, this.props);
  }

  open() {
    renderModalToDome(this.getContent());
  }

  close() {
    const modalDataId = this.element?.getAttribute('data-id');
    assertIsDefined(modalDataId);
    assertIsNonNullable(modalDataId);
    removeModalFromDome(modalDataId);
  }
}

export default Modal;
