import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-column': ['labor-adobe-typo-heading-four'],
  'labor-adobe-actioncard': ['labor-adobe-typo-heading-four'],
  'labor-adobe-typo-heading-four': [],
})

export default class LaborAdobeTypoHeadingFour extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'on-background': 'boolean',

    'padding-top': 'unit(px,%)',
    'padding-bottom': 'unit(px,%)',
  }

  static defaultAttributes = {
    'on-background': false,

    'padding-bottom': styleMapping.typographies.headingFour.paddingBottom,
  }

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
