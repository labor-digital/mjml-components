import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-typo-legal',
  attributes: {
    'on-background': { type: 'boolean', default: false },
    'padding-top': { type: 'unit(px,%)' },
    'padding-bottom': { type: 'unit(px,%)', default: AdobeRedStyleMapping.typographies.legal.paddingBottom },
    'css-class': { type: 'string', default: 'labor-adobe-typo-legal' },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

class LaborAdobeTypoLegal extends BodyComponent {
  static endingTag = true

  static additionalAttributes = {
    fontWeight: AdobeRedStyleMapping.typographies.legal.fontWeight,
    fontSize: AdobeRedStyleMapping.typographies.legal.fontSize,
    lineHeight: AdobeRedStyleMapping.typographies.legal.lineHeight,
    color: AdobeRedStyleMapping.typographies.legal.color,
    onBackgroundColor: AdobeRedStyleMapping.colors.white.hex,
  }

  headStyle = (breakpoint) => `
    .labor-adobe-typo-legal a {
      text-decoration: underline;
      color: ${LaborAdobeTypoLegal.additionalAttributes.color};
    }
    .labor-adobe-typo-legal a:hover {
      text-decoration: none !important;
      cursor: pointer;
    }
  `

  render() {
    const _onBackground = this.getAttribute('on-background')
    const onBackground = _onBackground === true || _onBackground === 'true'

    const attrs = {
      'font-size': LaborAdobeTypoLegal.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoLegal.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoLegal.additionalAttributes.fontWeight,
      'color': onBackground
        ? LaborAdobeTypoLegal.additionalAttributes.onBackgroundColor
        : LaborAdobeTypoLegal.additionalAttributes.color,
    }

    return this.renderMJML(`
      <mj-text
        ${this.htmlAttributes(attrs)}
      >
        ${this.getContent()}
      </mj-text>
    `)
  }
}
