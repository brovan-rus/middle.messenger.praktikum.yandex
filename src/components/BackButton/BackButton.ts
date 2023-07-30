import Block from '../../utils/Block';
import template from './BackButton.template';
import { Props } from '../../types/props';
import backButtonStyles from './BackButton.module.css';

class BackButton extends Block {
  constructor(props: Props) {
    super('div', props);
    this.children.Button.props.events = {
      click: (e: Event) => {
        e.preventDefault();
        window.history.back();
      },
      ...this.children.Button.props.events,
    };
  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidMount() {
    const attr = {
      class: backButtonStyles.container,
    };
    this.renewAttributes(attr);
  }
}

export default BackButton;
