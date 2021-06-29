import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'labor-gwa-rounded-button': [],
  'mj-column': ['labor-gwa-rounded-button'],
})

export default class LaborGwaRoundedButton extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    type: 'enum(cta,inverted,quiet)',
    href: 'string',
    width: 'unit(px)',
  }

  static defaultAttributes = {
    type: 'cta',
    href: '#',
  }

  render() {
    let attrs = {
      'href': this.getAttribute('href'),

      'width': this.getAttribute('width'),
      'inner-padding': '13px 45px',
      'font-size': '16px',
      'line-height': '18px',
      'font-weight': '700',
      'border-width': '2px',
      'border-radius': '50px',
    }
    switch (this.getAttribute('type')) {
      case 'quiet':
        attrs['color'] = '#ffffff'
        attrs['background-color'] = '#000000'
        attrs['border-color'] = '#000000'
        break
      case 'inverted':
        attrs['color'] = '#ffffff'
        attrs['background-color'] = ''
        attrs['border-color'] = '#ffffff'
        break
      case 'cta':
      default:
        attrs['color'] = '#000000'
        attrs['background-color'] = ''
        attrs['border-color'] = '#000000'
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
