import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-column': ['labor-adobe-typo-heading-two'],
  'labor-adobe-typo-heading-two': [],
})

export default class LaborAdobeTypoHeadingTwo extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'on-background': 'boolean',

    'padding-top': 'unit(px,%)',
    'padding-bottom': 'unit(px,%)',
  }

  static defaultAttributes = {
    'on-background': false,

    'padding-bottom': styleMapping.typographies.headingTwo.paddingBottom,
  }

  static additionalAttributes = {
    fontSize: styleMapping.typographies.headingTwo.fontSize,
    lineHeight: styleMapping.typographies.headingTwo.lineHeight,
    fontWeight: styleMapping.typographies.headingTwo.fontWeight,
    letterSpacing: styleMapping.typographies.headingTwo.letterSpacing,
    color: styleMapping.typographies.headingTwo.color,
    onBackgroundColor: styleMapping.colors.white.hex,
  }

  render() {
    const attrs = {
      'font-size': LaborAdobeTypoHeadingTwo.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoHeadingTwo.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoHeadingTwo.additionalAttributes.fontWeight,
      'letter-spacing': LaborAdobeTypoHeadingTwo.additionalAttributes.letterSpacing,
      'color': this.getAttribute('on-background')
        ? LaborAdobeTypoHeadingTwo.additionalAttributes.onBackgroundColor
        : LaborAdobeTypoHeadingTwo.additionalAttributes.color,
      'font-family': "adobe-clean-display, 'adobe-clean', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'",
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
