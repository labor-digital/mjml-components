import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'labor-adobe-button': [],
  'mj-column': ['labor-adobe-button'],
})

export default class LaborAdobeButton extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    type: 'enum(standard,inverted,quiet)',
    href: 'string',
    'padding-bottom': 'unit(px,%)',
    width: 'unit(px)',
  }

  static defaultAttributes = {
    type: 'standard',
    href: '#',
    width: '200px',
  }

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
