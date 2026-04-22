import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-button',
  attributes: {
    'type': { type: 'enum(standard,express,inverted,quiet)', default: 'standard' },
    'href': { type: 'string', default: '#' },
    'width': { type: 'unit(px)', default: '200px' },
    'padding-bottom': { type: 'unit(px,%)', default: AdobeRedStyleMapping.typographies.cta.paddingBottom },
    'padding-top': { type: 'unit(px,%)', default: AdobeRedStyleMapping.typographies.cta.paddingTop },
  },
  allowedParentTags: ['mj-column', 'labor-adobe-actioncard'],
  allowedChildTags: [],
})

class LaborAdobeButton extends BodyComponent {
  static endingTag = true

  render() {
    const buttonType = this.getAttribute('type') || 'standard'

    const attrs = {
      'href': this.getAttribute('href') || '#',
      'width': this.getAttribute('width') || '200px',
      'inner-padding': '7px 18px 9px 18px',
      'border-width': '2px',
      'font-size': AdobeRedStyleMapping.typographies.cta.fontSize,
      'line-height': AdobeRedStyleMapping.typographies.cta.lineHeight,
      'font-weight': AdobeRedStyleMapping.typographies.cta.fontWeight,
    }

    switch (buttonType) {
      case 'quiet':
        attrs['color'] = AdobeRedStyleMapping.colors.buttonQuiet.hex
        attrs['background-color'] = ''
        attrs['border-color'] = AdobeRedStyleMapping.colors.buttonQuiet.hex
        break
      case 'inverted':
        attrs['color'] = AdobeRedStyleMapping.colors.white.hex
        attrs['border-color'] = AdobeRedStyleMapping.colors.white.hex
        break
      case 'express':
        attrs['color'] = AdobeRedStyleMapping.colors.white.hex
        attrs['background-color'] = AdobeRedStyleMapping.colors.buttonExpress.hex
        attrs['border-color'] = AdobeRedStyleMapping.colors.buttonExpress.hex
        break
      case 'standard':
      default:
        attrs['color'] = AdobeRedStyleMapping.colors.white.hex
        attrs['background-color'] = AdobeRedStyleMapping.colors.blue900.hex
        attrs['border-color'] = AdobeRedStyleMapping.colors.blue900.hex
        break
    }

    return this.renderMJML(`
      <labor-rounded-button
        ${this.htmlAttributes(attrs)}
      >
        ${this.getContent()}
      </labor-rounded-button>
    `)
  }
}
