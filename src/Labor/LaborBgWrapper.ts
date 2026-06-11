import MjWrapper from 'mjml-wrapper'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'

const inheritedAttributes = Object.fromEntries(
  Object.entries((MjWrapper as any).allowedAttributes as Record<string, string>).map(([k, v]) => [k, { type: v }])
)

@MJMLCustomComponent({
  tag: 'labor-bg-wrapper',
  attributes: { ...inheritedAttributes },
  allowedParentTags: ['mj-body'],
  allowedChildTags: ['mj-section', 'labor-adobe-header'],
  endingTag: false,
})
export class LaborBgWrapper extends MjWrapper {
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
