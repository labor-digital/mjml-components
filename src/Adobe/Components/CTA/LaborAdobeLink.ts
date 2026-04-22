import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export default @MJMLCustomComponent({
  tag: 'labor-adobe-link',
  attributes: {
    'type': {
      type: 'enum(standard,inverted,quiet)',
      default: 'standard',
    },
    'href': {
      type: 'string',
      default: '#',
    },
    'padding-bottom': {
      type: 'unit(px,%)',
      default: styleMapping.spacings.vertical.px100,
    },
    'padding-top': {
      type: 'unit(px,%)',
      default: styleMapping.spacings.custom.px0,
    },
  },
  allowedParentTags: ['mj-column', 'labor-adobe-actioncard'],
  allowedChildTags: [],
})

class LaborAdobeLink extends BodyComponent {
  static endingTag = true

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
