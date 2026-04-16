import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export default @MJMLCustomComponent({
  tag: 'labor-adobe-typo-heading-four',
  attributes: {
    'on-background': {
      type: 'boolean',
      default: false,
    },
    'padding-top': {
      type: 'unit(px,%)',
    },
    'padding-bottom': {
      type: 'unit(px,%)',
      default: styleMapping.typographies.headingFour.paddingBottom,
    },
  },
  allowedParentTags: ['mj-column', 'labor-adobe-actioncard'],
  allowedChildTags: [],
})

class LaborAdobeTypoHeadingFour extends BodyComponent {
  static endingTag = true

  static additionalAttributes = {
    fontSize: styleMapping.typographies.headingFour.fontSize,
    lineHeight: styleMapping.typographies.headingFour.lineHeight,
    fontWeight: styleMapping.typographies.headingFour.fontWeight,
    color: styleMapping.typographies.headingFour.color,
    onBackgroundColor: styleMapping.colors.white.hex,
  }

  render() {
    const attrs = {
      'font-size': LaborAdobeTypoHeadingFour.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoHeadingFour.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoHeadingFour.additionalAttributes.fontWeight,
      'color': this.getAttribute('on-background')
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
