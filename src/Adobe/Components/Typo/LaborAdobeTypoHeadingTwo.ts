import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export default @MJMLCustomComponent({
  tag: 'labor-adobe-typo-heading-two',
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
      default: styleMapping.typographies.headingTwo.paddingBottom,
    },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

class LaborAdobeTypoHeadingTwo extends BodyComponent {
  static endingTag = true

  static additionalAttributes = {
    fontSize: styleMapping.typographies.headingTwo.fontSize,
    lineHeight: styleMapping.typographies.headingTwo.lineHeight,
    fontWeight: styleMapping.typographies.headingTwo.fontWeight,
    color: styleMapping.typographies.headingTwo.color,
    onBackgroundColor: styleMapping.colors.white.hex,
  }

  render() {
    const attrs = {
      'font-size': LaborAdobeTypoHeadingTwo.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoHeadingTwo.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoHeadingTwo.additionalAttributes.fontWeight,
      'color': this.getAttribute('on-background')
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
