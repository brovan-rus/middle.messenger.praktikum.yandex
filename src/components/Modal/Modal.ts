import Block from '../../utils/Block';
import styles from './Modal.module.css';
import { removeModalFromDome, renderModalToDome } from '../../utils/modal';

class Modal extends Block {
  constructor(Component: Block) {
    super('div', {
      [Component.constructor.name]: Component,
      styles,
    });

    this.props.events = {
      mousedown: (e: Event) => {
        if (e.target === e.currentTarget) {
          this.close();
        }
        if ((e.target as Element).id === 'closeButton') {
          this.close();
        }
      },
      // submit: () => {
      //   this.close();
      // },
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
    renderModalToDome(this);
  }

  close() {
    removeModalFromDome(this);
  }
}

export default Modal;
