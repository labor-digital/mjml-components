import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeComponentMapping from '../../_Styles/AdobeComponentMapping'

const mapping = AdobeComponentMapping.LaborAdobeTypoHeadingFour;
registerDependencies(mapping.dependencies);

export default class LaborAdobeTypoHeadingFour extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'on-background': 'boolean',
    'padding-bottom': 'unit(px,%)',
  }

  static defaultAttributes = {
    'on-background': false,
    'padding-bottom': '0px',
  }

  render() {
    const attrs = {
      'font-size': mapping.additionalAttributes.fontSize,
      'line-height': mapping.additionalAttributes.lineHeight,
      'font-weight': mapping.additionalAttributes.fontWeight,
      'letter-spacing': mapping.additionalAttributes.letterSpacing,
      'color': this.getAttribute('on-background') ? mapping.additionalAttributes.onBackgroundColor : mapping.additionalAttributes.color,
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
