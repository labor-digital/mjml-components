import MjWrapper from 'mjml-wrapper'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'

export default @MJMLCustomComponent({
  tag: 'labor-bg-wrapper',
  attributes: {},
  allowedParentTags: ['mj-body'],
  allowedChildTags: ['mj-section'],
})

class LaborBgWrapper extends MjWrapper {
  getStyles() {
    const fullWidth = this.isFullWidth()
    let styles = super.getStyles()

    if (fullWidth && this.getAttribute('background-url')) {
      styles['tableFullwidth']['background-color'] = this.getAttribute('background-color')
    }

    if (!fullWidth && this.getAttribute('background-url')) {
      styles['table']['background-color'] = this.getAttribute('background-color')
      styles['div']['background-color'] = this.getAttribute('background-color')
    }

    return styles
  }

  renderWithBackground(content) {
    return `${content}`
  }
}
