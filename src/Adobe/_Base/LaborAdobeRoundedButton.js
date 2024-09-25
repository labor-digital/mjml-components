import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../_Styles/RED/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'labor-adobe-rounded-button': [],
  'mj-column': ['labor-adobe-rounded-button'],
})

export default class LaborAdobeRoundedButton extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    type: 'enum(cta,inverted,quiet,cta_inverted)',
    href: 'string',
    'padding-bottom': 'unit(px,%)',
    width: 'unit(px)',
  }

  static defaultAttributes = {
    type: 'cta',
    href: '#',
    width: '180px',
  }

  render() {
    let attrs = {
      'href': this.getAttribute('href'),
      'width': this.getAttribute('width'),
      'inner-padding': '8px 18px 10px 18px',
      'font-size': '16px',
      'line-height': '18px',
      'font-weight': '600',
      'border-width': '2px',
    }
    switch (this.getAttribute('type')) {
      case 'quiet':
        attrs['color'] = styleMapping.colors.gray700.hex
        attrs['background-color'] = ''
        attrs['border-color'] = styleMapping.colors.gray700.hex
        break
      case 'inverted':
        attrs['color'] = styleMapping.colors.white.hex
        attrs['background-color'] = ''
        attrs['border-color'] = styleMapping.colors.white.hex
        break
      case 'cta_inverted':
        attrs['color'] = styleMapping.colors.gray700.hex
        attrs['background-color'] = styleMapping.colors.white.hex
        attrs['border-color'] = styleMapping.colors.white.hex
        break
      case 'cta':
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
