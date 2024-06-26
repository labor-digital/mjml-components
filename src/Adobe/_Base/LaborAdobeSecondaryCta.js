import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'labor-adobe-secondary-cta': [],
  'mj-column': ['labor-adobe-secondary-cta'],
})

export default class LaborAdobeSecondaryCta extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    type: 'enum(normal,inverted,quiet)',
    href: 'string',
    'padding-bottom': 'unit(px,%)',
  }

  static defaultAttributes = {
    type: 'normal',
    href: '#',
  }

  getStyles() {
    let color = ''
    switch (this.getAttribute('type')) {
      case 'quiet':
        color = '#747474'
        break
      case 'inverted':
        color = '#ffffff'
        break
      case 'normal':
      default:
        color = '#1473e6'
        break
    }
    return {
      a: {
        'font-size': '16px',
        'line-height': '18px',
        'font-weight': '600',
        'text-decoration': 'none',
        'font-family': this.getAttribute('font-family'),
        'color': color,
      },
    }
  }

  render() {
    let attrs = {
      href: this.getAttribute('href'),
      style: 'a',
      target: '_blank',
    }
    if (this.getAttribute('id')) attrs['id'] = this.getAttribute('id')
    if (this.getAttribute('data-nl-type')) attrs['data-nl-type'] = this.getAttribute('data-nl-type')
    if (this.getAttribute('data-nl-lnkep-perso-attr-href'))
      attrs['data-nl-lnkep-perso-attr-href'] = this.getAttribute('data-nl-lnkep-perso-attr-href')

    return `
      <a
        ${this.htmlAttributes(attrs)}
      >${this.getContent()}${this.getAttribute('type') != 'normal' ? '&nbsp;&rsaquo;' : ''}</a>
    `
  }
}
