import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export default @MJMLCustomComponent({
  tag: 'labor-adobe-button',
  attributes: {
    'type': {
      type: 'enum(standard,express,inverted,quiet)',
      default: 'standard',
    },
    'href': {
      type: 'string',
      default: '#',
    },
    'width': {
      type: 'unit(px)',
      default: '200px',
    },
    'padding-bottom': {
      type: 'unit(px,%)',
      default: styleMapping.typographies.cta.paddingBottom,
    },
    'padding-top': {
      type: 'unit(px,%)',
      default: styleMapping.typographies.cta.paddingTop,
    },
  },
  allowedParentTags: ['mj-column', 'labor-adobe-actioncard'],
  allowedChildTags: [],
})

class LaborAdobeButton extends BodyComponent {
  static endingTag = true

  render() {
    let attrs = {
      'href': this.getAttribute('href'),
      'width': this.getAttribute('width'),
      'inner-padding': '7px 18px 9px 18px',
      'border-width': '2px',
      'font-size': styleMapping.typographies.cta.fontSize,
      'line-height': styleMapping.typographies.cta.lineHeight,
      'font-weight': styleMapping.typographies.cta.fontWeight,
    }
    switch (this.getAttribute('type')) {
      case 'quiet':
        attrs['color'] = styleMapping.colors.buttonQuiet.hex
        attrs['background-color'] = ''
        attrs['border-color'] = styleMapping.colors.buttonQuiet.hex
        break
      case 'inverted':
        attrs['color'] = styleMapping.colors.white.hex
        attrs['border-color'] = styleMapping.colors.white.hex
        break
      case 'express':
        attrs['color'] = styleMapping.colors.white.hex
        attrs['background-color'] = styleMapping.colors.buttonExpress.hex
        attrs['border-color'] = styleMapping.colors.buttonExpress.hex
        break
      case 'standard':
      default:
        attrs['color'] = styleMapping.colors.white.hex
        attrs['background-color'] = styleMapping.colors.blue900.hex
        attrs['border-color'] = styleMapping.colors.blue900.hex
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
