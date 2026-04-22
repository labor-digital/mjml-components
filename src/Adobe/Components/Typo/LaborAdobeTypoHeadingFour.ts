import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-typo-heading-four',
  attributes: {
    'on-background': { type: 'boolean', default: false },
    'padding-top': { type: 'unit(px,%)' },
    'padding-bottom': { type: 'unit(px,%)', default: AdobeRedStyleMapping.typographies.headingFour.paddingBottom },
  },
  allowedParentTags: ['mj-column', 'labor-adobe-actioncard'],
  allowedChildTags: [],
})

class LaborAdobeTypoHeadingFour extends BodyComponent {
  static endingTag = true

  static additionalAttributes = {
    fontSize: AdobeRedStyleMapping.typographies.headingFour.fontSize,
    lineHeight: AdobeRedStyleMapping.typographies.headingFour.lineHeight,
    fontWeight: AdobeRedStyleMapping.typographies.headingFour.fontWeight,
    color: AdobeRedStyleMapping.typographies.headingFour.color,
    onBackgroundColor: AdobeRedStyleMapping.colors.white.hex,
  }

  render() {
    const _onBackground = this.getAttribute('on-background')
    const onBackground = _onBackground === true || _onBackground === 'true'

    const attrs = {
      'font-size': LaborAdobeTypoHeadingFour.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoHeadingFour.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoHeadingFour.additionalAttributes.fontWeight,
      'color': onBackground
        ? LaborAdobeTypoHeadingFour.additionalAttributes.onBackgroundColor
        : LaborAdobeTypoHeadingFour.additionalAttributes.color,
      'font-family': "'adobe-clean-display', 'adobe-clean', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'",
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
