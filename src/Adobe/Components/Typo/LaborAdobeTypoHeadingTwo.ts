import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-typo-heading-two',
  attributes: {
    'on-background': { type: 'boolean', default: false },
    'padding-top': { type: 'unit(px,%)' },
    'padding-bottom': { type: 'unit(px,%)', default: AdobeRedStyleMapping.typographies.headingTwo.paddingBottom },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

class LaborAdobeTypoHeadingTwo extends BodyComponent {
  static endingTag = true

  static additionalAttributes = {
    fontSize: AdobeRedStyleMapping.typographies.headingTwo.fontSize,
    lineHeight: AdobeRedStyleMapping.typographies.headingTwo.lineHeight,
    fontWeight: AdobeRedStyleMapping.typographies.headingTwo.fontWeight,
    color: AdobeRedStyleMapping.typographies.headingTwo.color,
    onBackgroundColor: AdobeRedStyleMapping.colors.white.hex,
  }

  render() {
    const _onBackground = this.getAttribute('on-background')
    const onBackground = _onBackground === true || _onBackground === 'true'

    const attrs = {
      'font-size': LaborAdobeTypoHeadingTwo.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoHeadingTwo.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoHeadingTwo.additionalAttributes.fontWeight,
      'color': onBackground
        ? LaborAdobeTypoHeadingTwo.additionalAttributes.onBackgroundColor
        : LaborAdobeTypoHeadingTwo.additionalAttributes.color,
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
