import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-typo-heading-one',
  attributes: {
    'on-background': { type: 'boolean', default: false },
    'padding-top': { type: 'unit(px,%)' },
    'padding-bottom': { type: 'unit(px,%)', default: AdobeRedStyleMapping.typographies.headingOne.paddingBottom },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

class LaborAdobeTypoHeadingOne extends BodyComponent {
  static endingTag = true

  static additionalAttributes = {
    fontSize: AdobeRedStyleMapping.typographies.headingOne.fontSize,
    lineHeight: AdobeRedStyleMapping.typographies.headingOne.lineHeight,
    fontWeight: AdobeRedStyleMapping.typographies.headingOne.fontWeight,
    color: AdobeRedStyleMapping.typographies.headingOne.color,
    onBackgroundColor: AdobeRedStyleMapping.colors.white.hex,
  }

  render() {
    const _onBackground = this.getAttribute('on-background')
    const onBackground = _onBackground === true || _onBackground === 'true'

    const attrs = {
      'font-size': LaborAdobeTypoHeadingOne.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoHeadingOne.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoHeadingOne.additionalAttributes.fontWeight,
      'color': onBackground
        ? LaborAdobeTypoHeadingOne.additionalAttributes.onBackgroundColor
        : LaborAdobeTypoHeadingOne.additionalAttributes.color,
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
