import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'labor-adobe-link': [],
  'mj-column': ['labor-adobe-link'],
  'labor-adobe-actioncard': ['labor-adobe-link'],
})

export default class LaborAdobeLink extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'type': 'enum(standard,inverted,quiet)',
    'href': 'string',

    'padding-bottom': 'unit(px,%)',
    'padding-top': 'unit(px,%)',
  }

  static defaultAttributes = {
    'type': 'standard',
    'href': '#',

    'padding-bottom': styleMapping.spacings.vertical.px100,
    'padding-top': styleMapping.spacings.custom.px0,
  }

  getStyles() {
    let color = ''
    switch (this.getAttribute('type')) {
      case 'quiet':
        color = styleMapping.colors.buttonQuiet.hex
        break
      case 'inverted':
        color = styleMapping.colors.white.hex
        break
      case 'standard':
      default:
        color = styleMapping.colors.blue900.hex
        break
    }
    return {
      a: {
        'font-size': styleMapping.typographyFontSize.size18,
        'line-height': styleMapping.typographyLineHeight.size26,
        'font-weight': styleMapping.typographyFontWeight.bold,
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
      >${this.getContent()}${this.getAttribute('type') !== 'standard' ? '&nbsp;&rsaquo;' : ''}</a>
    `
  }
}
