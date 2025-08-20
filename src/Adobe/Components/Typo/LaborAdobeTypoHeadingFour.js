import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-column': ['labor-adobe-typo-heading-four'],
  'labor-adobe-typo-heading-four': [],
})

export default class LaborAdobeTypoHeadingFour extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'on-background': 'boolean',
    'padding-bottom': 'unit(px,%)',
  }

  static defaultAttributes = {
    'on-background': false,
    'padding-bottom': styleMapping.spacings.vertical.px0,
  }

  static additionalAttributes = {
    fontSize: styleMapping.typographies.headingFour.fontSize,
    lineHeight: styleMapping.typographies.headingFour.lineHeight,
    fontWeight: styleMapping.typographies.headingFour.fontWeight,
    letterSpacing: styleMapping.typographies.headingFour.letterSpacing,
    color: styleMapping.typographies.headingFour.color,
    onBackgroundColor: styleMapping.colors.white.hex,
  }

  render() {
    const attrs = {
      'font-size': LaborAdobeTypoHeadingFour.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoHeadingFour.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoHeadingFour.additionalAttributes.fontWeight,
      'letter-spacing': LaborAdobeTypoHeadingFour.additionalAttributes.letterSpacing,
      'color': this.getAttribute('on-background')
        ? LaborAdobeTypoHeadingFour.additionalAttributes.onBackgroundColor
        : LaborAdobeTypoHeadingFour.additionalAttributes.color,
      'padding-bottom': this.getAttribute('padding-bottom'),
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
