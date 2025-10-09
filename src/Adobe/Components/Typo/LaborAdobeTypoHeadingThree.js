import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-column': ['labor-adobe-typo-heading-three'],
  'labor-adobe-actioncard': ['labor-adobe-typo-heading-three'],
  'labor-adobe-typo-heading-three': [],
})

export default class LaborAdobeTypoHeadingThree extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'on-background': 'boolean',

    'padding-top': 'unit(px,%)',
    'padding-bottom': 'unit(px,%)',
  }

  static defaultAttributes = {
    'on-background': false,

    'padding-bottom': styleMapping.typographies.headingThree.paddingBottom,
  }

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
