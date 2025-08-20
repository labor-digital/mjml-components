import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-column': ['labor-adobe-typo-legal'],
  'labor-adobe-typo-legal': [],
})

export default class LaborAdobeTypoLegal extends BodyComponent {
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
    fontWeight: styleMapping.typographies.legal.fontWeight,
    fontSize: styleMapping.typographies.legal.fontSize,
    lineHeight: styleMapping.typographies.legal.lineHeight,
    color: styleMapping.typographies.legal.color,
    onBackgroundColor: styleMapping.colors.white.hex,
  }

  render() {
    const attrs = {
      'font-size': LaborAdobeTypoLegal.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoLegal.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoLegal.additionalAttributes.fontWeight,
      'color': this.getAttribute('on-background')
        ? LaborAdobeTypoLegal.additionalAttributes.onBackgroundColor
        : LaborAdobeTypoLegal.additionalAttributes.color,
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
