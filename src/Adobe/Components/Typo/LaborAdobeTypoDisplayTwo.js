import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-column': ['labor-adobe-typo-display-two'],
  'labor-adobe-typo-display-two': [],
})

export default class LaborAdobeTypoDisplayTwo extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'on-background': 'boolean',
    'type': 'enum(normal,quiet)',

    'padding-top': 'unit(px,%)',
    'padding-bottom': 'unit(px,%)',
  }

  static defaultAttributes = {
    'on-background': false,
    'type': 'normal',

    'padding-bottom': styleMapping.typographies.displayTwo.paddingBottom,
  }

  static additionalAttributes = {
    fontSize: styleMapping.typographies.displayTwo.fontSize,
    lineHeight: styleMapping.typographies.displayTwo.lineHeight,
    fontWeight: styleMapping.typographies.displayTwo.fontWeight,
    onBackgroundColor: styleMapping.colors.white.hex,
    color: styleMapping.typographies.displayTwo.color,
  }

  render() {
    const attrs = {
      'font-size': LaborAdobeTypoDisplayTwo.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoDisplayTwo.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoDisplayTwo.additionalAttributes.fontWeight[this.getAttribute('type')],
      'color': this.getAttribute('on-background')
        ? LaborAdobeTypoDisplayTwo.additionalAttributes.onBackgroundColor
        : LaborAdobeTypoDisplayTwo.additionalAttributes.color,
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
