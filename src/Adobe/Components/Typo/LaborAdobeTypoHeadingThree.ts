import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export default @MJMLCustomComponent({
  tag: 'labor-adobe-typo-heading-three',
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
      default: styleMapping.typographies.headingThree.paddingBottom,
    },
  },
  allowedParentTags: ['mj-column', 'labor-adobe-actioncard'],
  allowedChildTags: [],
})

class LaborAdobeTypoHeadingThree extends BodyComponent {
  static endingTag = true

  static additionalAttributes = {
    fontSize: styleMapping.typographies.headingThree.fontSize,
    lineHeight: styleMapping.typographies.headingThree.lineHeight,
    fontWeight: styleMapping.typographies.headingThree.fontWeight,
    color: styleMapping.typographies.headingThree.color,
    onBackgroundColor: styleMapping.colors.white.hex,
  }

  render() {
    const attrs = {
      'font-size': LaborAdobeTypoHeadingThree.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoHeadingThree.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoHeadingThree.additionalAttributes.fontWeight,
      'color': this.getAttribute('on-background')
        ? LaborAdobeTypoHeadingThree.additionalAttributes.onBackgroundColor
        : LaborAdobeTypoHeadingThree.additionalAttributes.color,
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
