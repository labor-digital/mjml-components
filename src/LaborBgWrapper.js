import { registerDependencies } from 'mjml-validator'
import MjWrapper from 'mjml-wrapper'

registerDependencies({
  'labor-bg-wrapper': ['mj-section'],
  'mj-body': ['labor-adobe-section'],
})

export default class LaborBgWrapper extends MjWrapper {

  getStyles() {
    const fullWidth = this.isFullWidth();
    let styles = super.getStyles();

    if (fullWidth && this.getAttribute('background-url')) {
        styles['tableFullwidth']['background-color'] = this.getAttribute('background-color');
    }

    if (!fullWidth && this.getAttribute('background-url')) {
        styles['table']['background-color'] = this.getAttribute('background-color');
        styles['div']['background-color'] = this.getAttribute('background-color');
    }

    return styles;
  }

  renderWithBackground(content) {
    return `${content}`;
  }
}
