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
    'padding-bottom': 'unit(px,%)',
  }

  static defaultAttributes = {
    'on-background': false,
    'padding-bottom': styleMapping.spacings.vertical.px0,
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
