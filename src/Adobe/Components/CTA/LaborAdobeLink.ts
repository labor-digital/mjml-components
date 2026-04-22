import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-link',
  attributes: {
    'type': { type: 'enum(standard,inverted,quiet)', default: 'standard' },
    'href': { type: 'string', default: '#' },
    'padding-bottom': { type: 'unit(px,%)', default: AdobeRedStyleMapping.spacings.vertical.px100 },
    'padding-top': { type: 'unit(px,%)', default: AdobeRedStyleMapping.spacings.custom.px0 },
  },
  allowedParentTags: ['mj-column', 'labor-adobe-actioncard'],
  allowedChildTags: [],
})

class LaborAdobeLink extends BodyComponent {
  static endingTag = true

  getStyles() {
    const linkType = this.getAttribute('type') || 'standard'
    let color = AdobeRedStyleMapping.colors.blue900.hex
    switch (linkType) {
      case 'quiet':
        color = AdobeRedStyleMapping.colors.buttonQuiet.hex
        break
      case 'inverted':
        color = AdobeRedStyleMapping.colors.white.hex
        break
    }
    return {
      a: {
        'font-size': AdobeRedStyleMapping.typographyFontSize.size18,
        'line-height': AdobeRedStyleMapping.typographyLineHeight.size26,
        'font-weight': AdobeRedStyleMapping.typographyFontWeight.bold,
        'text-decoration': 'none',
        'font-family': this.getAttribute('font-family'),
        'color': color,
      },
    }
  }

  render() {
    const linkType = this.getAttribute('type') || 'standard'

    const attrs: Record<string, any> = {
      href: this.getAttribute('href') || '#',
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
      >${this.getContent()}${linkType !== 'standard' ? '&nbsp;&rsaquo;' : ''}</a>
    `
  }
}
