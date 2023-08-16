import Block from '../../utils/Block';
import styles from './Tooltip.module.css';
import { Props } from '../../types/props';
import { Callback } from '../../types/callback';
import { assertIsDefined } from '../../utils/assertIsDefined';
import ClickOutsideListener from '../../utils/clickOutsideListener';
import { removeModalFromDome, renderModalToDome } from '../../utils/modal';
import { assertIsNonNullable } from '../../utils/assertIsNonNullable';

export type MenuItem = {
  title: string;
  action: Callback;
  icon: string;
};

class TooltipMenu extends Block {
  outsideClickListener: ClickOutsideListener;

  public opened = false;

  constructor(props: Props) {
    super('div', props);
    assertIsDefined(this.element);

    this.outsideClickListener = new ClickOutsideListener(
      [this.element, this.props.targetElement],
      this.close.bind(this),
    );
    this.renewPosition = this.renewPosition.bind(this);
    this.props.events = {
      ...this.props.events,
      click: (e: Event) => {
        const target = e.target as HTMLElement;
        assertIsNonNullable(target);
        this.props.menuItems[Number(target.dataset.action)].action();
      },
    };
  }

  componentDidMount() {
    const attr = {
      class: styles.container,
    };
    this.renewAttributes(attr);
    window.addEventListener('resize', this.renewPosition);
    this.renewPosition();

    this.outsideClickListener.registerListener();
  }

  renewPosition() {
    const { targetElement } = this.props;
    assertIsDefined(targetElement);
    const { x, y, height } = targetElement.getBoundingClientRect();
    const position = {
      x,
      y,
    };
    this.setProps({ ...this.props, position, targetHeight: height });
  }

  render() {
    const template = this.props.menuItems
      .map(
        (item: MenuItem, i: number) => `
              <div data-action=${i} class="${styles.lineContainer}">
              <div
                class=${styles.iconContainer}
                style="background: no-repeat center url(${item.icon})"
                ></div>
               <span class="${styles.text}">${item.title}</span>
            </div>`,
      )
      .join('\n');

    return this.compile(template, this.props);
  }

  open() {
    if (!this.opened) {
      console.log('open');

      renderModalToDome(this);
      this.opened = true;
    }
  }

  close() {
    if (this.opened) {
      console.log('close');

      removeModalFromDome(this);
      this.opened = false;
    }
  }

  componentIsGoingToUnmount(): boolean {
    window.removeEventListener('resize', this.renewPosition);
    this.outsideClickListener.unregisterListener();
    return true;
  }

  componentDidUpdate(_oldProps: Props, newProps: Props): boolean {
    assertIsDefined(this.element);
    const tooltipWidth = this.element.getBoundingClientRect().width;
    const style = `top: ${
      newProps.position.y + newProps.targetHeight + 26
    }px; left: ${newProps.position.x - tooltipWidth}px`;
    this.renewAttributes({ style });
    return true;
  }
}

export default TooltipMenu;
