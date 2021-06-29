import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'labor-adobe-rounded-button': [],
  'mj-column': ['labor-adobe-rounded-button'],
})

export default class LaborAdobeRoundedButton extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    type: 'enum(cta,inverted,quiet)',
    href: 'string',
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
        attrs['color'] = '#747474'
        attrs['background-color'] = ''
        attrs['border-color'] = '#747474'
        break
      case 'inverted':
        attrs['color'] = '#ffffff'
        attrs['background-color'] = ''
        attrs['border-color'] = '#ffffff'
        break
      case 'cta':
      default:
        attrs['color'] = '#ffffff'
        attrs['background-color'] = '#1473e6'
        attrs['border-color'] = '#1473e6'
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
