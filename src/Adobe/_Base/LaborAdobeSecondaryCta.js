import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../_Styles/RED/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

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
        color = styleMapping.colors.gray700.hex
        break
      case 'inverted':
        color = styleMapping.colors.white.hex
        break
      case 'normal':
      default:
        color = styleMapping.colors.blue900.hex
        break
    }
    return {
      a: {
        'font-size': styleMapping.typographyFontSize.size16,
        'line-height': styleMapping.typographyLineHeight.size18,
        'font-weight': styleMapping.typographyFontWeight.regular,
        'text-decoration': 'none',
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
